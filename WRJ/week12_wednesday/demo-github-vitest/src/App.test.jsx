import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { expect } from "vitest"
import App from "./App"

test('renders App component', () => {
  render(<App />)
  expect(screen.getByText(/Counter:/i)).to.exist
})

test('increments counter', () => {
  render(<App />)
  const btn = screen.getByText(/Increment/i)
  fireEvent.click(btn)
  expect(screen.getByText(/Counter: 1/i)).to.exist
})

test('decrements counter', () => {
  render(<App />)
  const btn = screen.getByText(/Decrement/i)
  fireEvent.click(btn)
  expect(screen.getByText(/Counter: -1/i)).to.exist
})

test('displays time in Swedish format', async () => {
  render(<App />)

  await waitFor(() => {
    const timeElement = screen.getByText(/Current Time:/i)
    const currentTime = timeElement.textContent?.split('Current Time:')[1]?.trim()

    // Kontrollera att tiden är i formatet HH:mm:ss
    expect(currentTime).to.match(/^\d{2}:\d{2}:\d{2}$/)
  })
})