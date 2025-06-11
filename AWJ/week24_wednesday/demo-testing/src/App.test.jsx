import { render, screen } from "@testing-library/react"
import { beforeEach, describe, expect, it } from "vitest"
import App from "./App"
import userEvent from "@testing-library/user-event"
import '@testing-library/jest-dom/vitest'

describe('Login flow', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })

  it('should login and show profile name + picture', async () => {
    render(<App />)

    expect(screen.getByText('Inloggning')).toBeInTheDocument()

    const input = screen.getByPlaceholderText('Användarnamn')
    const button = screen.getByRole('button', { name: /logga in/i })

    await userEvent.type(input, 'TestUser')
    await userEvent.click(button)

    expect(screen.getByText(/välkommen/i)).toBeInTheDocument()
    const profileImg = screen.getByAltText('Profilbild')
    expect(profileImg).toBeInTheDocument()
    expect(profileImg).toHaveAttribute('src', expect.stringContaining('darth_vader.webp'))
  })

  it('should log out and return to login page', async () => {
    render(<App />)

    const input = screen.getByPlaceholderText('Användarnamn')
    const button = screen.getByRole('button', { name: /logga in/i })

    await userEvent.type(input, 'AnotherUser')
    await userEvent.click(button)

    const logoutBtn = screen.getByRole('button', { name: /logga ut/i })
    await userEvent.click(logoutBtn)

    expect(screen.getByText('Inloggning')).toBeInTheDocument()
  })

  it('should show error if trying to login with empty username', async () => {
    render(<App />)

    const button = screen.getByRole('button', { name: /logga in/i })

    await userEvent.click(button)

    expect(screen.getByText('Användarnamn krävs')).toBeInTheDocument()
  })
})