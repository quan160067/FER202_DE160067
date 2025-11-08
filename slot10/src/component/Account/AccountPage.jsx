// src/components/Account/AccountPage.jsx
import React, { useState } from "react";
import { Tabs, Tab, ProgressBar, Container } from "react-bootstrap";
import AboutForm from "./AboutForm";
import AccountForm from "./AccountForm";
import AddressForm from "./AddressForm";

export default function AccountPage() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const progress = step === 1 ? 33 : step === 2 ? 67 : 100;

  return (
    <Container className="my-4 p-4 border rounded bg-white">
      <h4 className="text-primary mb-3">Build Your Profile</h4>
      <ProgressBar now={progress} label={`${progress}%`} className="mb-4" />

      <Tabs activeKey={step} className="mb-3" onSelect={() => {}}>
        <Tab eventKey={1} title="About" disabled={step !== 1}>
          <AboutForm nextStep={nextStep} />
        </Tab>
        <Tab eventKey={2} title="Account" disabled={step !== 2}>
          <AccountForm prevStep={prevStep} nextStep={nextStep} />
        </Tab>
        <Tab eventKey={3} title="Address" disabled={step !== 3}>
          <AddressForm prevStep={prevStep} />
        </Tab>
      </Tabs>
    </Container>
  );
}
