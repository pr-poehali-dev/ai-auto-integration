CREATE TABLE IF NOT EXISTS registrations (
  id SERIAL PRIMARY KEY,
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  billing_email TEXT NOT NULL,
  company TEXT NOT NULL,
  inn TEXT NOT NULL,
  kpp TEXT NOT NULL,
  legal_address TEXT NOT NULL,
  seats INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);