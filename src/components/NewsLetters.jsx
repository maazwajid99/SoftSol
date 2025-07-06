import { useState } from "react";
import styled from "styled-components";

export default function NewsletterSubscription() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setMessage("Thank you for subscribing!");
      setEmail("");

      setTimeout(() => setMessage(""), 2000);
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Wrapper>
      <Card className="shadow">
        <div className="card-body p-4">
          <h2 className="card-title text-white text-center mb-3">
            Subscribe to Our Newsletter
          </h2>
          <p className="card-text text-white text-center mb-4">
            Get the latest trucking industry news, tips, and exclusive load
            opportunities delivered straight to your inbox.
          </p>

          <form onSubmit={handleSubmit}>
            <InputWrapper>
              <StyledInput
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email address"
              />
              <HeroButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Subscribing..." : <>Subscribe <span className="ms-2">→</span></>}
              </HeroButton>
            </InputWrapper>

            {message && (
              <div className="mt-3 text-center text-white">{message}</div>
            )}
          </form>
        </div>
      </Card>
    </Wrapper>
  );
}

// STYLES
const Wrapper = styled.div`
  padding: 4%;
  display: flex;
  justify-content: center;
`;

const Card = styled.div`
  max-width: 600px;
  border-radius: 8px;
  background: linear-gradient(161deg, rgb(48, 212, 199), rgb(27, 117, 186));
  border: none !important;
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledInput = styled.input`
  flex: 1;
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
  border-radius: 5px;
  padding: 12px 16px;
  font-size: 16px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const HeroButton = styled.button`
  background-color: #30d4c7;
  border: 1px solid #30d5c8;
  border-radius: 5px;
  font-size: 14px;
  padding: 14px 28px;
  font-family: "DM Sans", sans-serif;
  transition: 0.3s;
  color: white;
  white-space: nowrap;

  &:hover {
    background-color: #00b894;
    box-shadow: 0 8px 25px rgba(48, 213, 200, 0.5);
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
