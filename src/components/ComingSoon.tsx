import { useState, FormEvent } from "react";
import { site } from "../data/portfolio";

const STORAGE_KEY = "portfolio_unlocked";
const PASSWORD = "0926";

export function getIsUnlocked(): boolean {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem(STORAGE_KEY) === "1";
}

export function setUnlocked(): void {
  sessionStorage.setItem(STORAGE_KEY, "1");
}

export function ComingSoon({ onUnlock }: { onUnlock: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    if (password === PASSWORD) {
      setUnlocked();
      onUnlock();
    } else {
      setError("Incorrect password. Please try again.");
    }
  }

  return (
    <div className="coming-soon">
      <div className="coming-soon__card">
        <h1 className="coming-soon__title">{site.name}</h1>
        <p className="coming-soon__subtitle">Coming soon</p>
        <p className="coming-soon__text">Enter the password to preview.</p>
        <form onSubmit={handleSubmit} className="coming-soon__form">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="coming-soon__input"
            autoComplete="off"
            autoFocus
          />
          <button type="submit" className="coming-soon__btn">
            Enter
          </button>
        </form>
        {error && <p className="coming-soon__error" role="alert">{error}</p>}
      </div>
    </div>
  );
}
