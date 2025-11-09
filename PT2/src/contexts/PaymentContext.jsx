import { createContext, useReducer, useContext, useEffect } from "react";
import { api } from "../services/api";
import { useAuth } from "./AuthContext";

const PaymentContext = createContext();

const initialState = {
  payments: [],
  filter: "",
  sort: "",
  loading: false,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, payments: action.payload, loading: false };
    case "FETCH_ERROR":
      return { ...state, error: action.payload, loading: false };
    case "ADD_PAYMENT":
      return { ...state, payments: [...state.payments, action.payload] };
    case "UPDATE_PAYMENT":
      return {
        ...state,
        payments: state.payments.map((p) =>
          p.id === action.payload.id ? action.payload : p
        ),
      };
    case "DELETE_PAYMENT":
      return {
        ...state,
        payments: state.payments.filter((p) => p.id !== action.payload),
      };
    case "SET_FILTER":
      return { ...state, filter: action.payload };
    case "SET_SORT":
      return { ...state, sort: action.payload };
    default:
      return state;
  }
}

export const PaymentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { state: authState } = useAuth();

  // Load data when logged in
  useEffect(() => {
    const fetchPayments = async () => {
      if (!authState.user) return;
      dispatch({ type: "FETCH_START" });
      try {
        const res = await api.get(`/payments?userId=${authState.user.id}`);
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      } catch (err) {
        dispatch({ type: "FETCH_ERROR", payload: err.message });
      }
    };
    fetchPayments();
  }, [authState.user]);

  // CRUD handlers
  const addPayment = async (payment) => {
    const res = await api.post("/payments", payment);
    dispatch({ type: "ADD_PAYMENT", payload: res.data });
  };

  const updatePayment = async (payment) => {
    const res = await api.put(`/payments/${payment.id}`, payment);
    dispatch({ type: "UPDATE_PAYMENT", payload: res.data });
  };

  const deletePayment = async (id) => {
    await api.delete(`/payments/${id}`);
    dispatch({ type: "DELETE_PAYMENT", payload: id });
  };

  const value = {
    ...state,
    dispatch,
    addPayment,
    updatePayment,
    deletePayment,
  };

  return (
    <PaymentContext.Provider value={value}>
      {children}
    </PaymentContext.Provider>
  );
};

export const usePayments = () => useContext(PaymentContext);
