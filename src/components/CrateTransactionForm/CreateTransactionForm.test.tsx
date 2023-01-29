export {}

// import { fireEvent, render, screen } from '@testing-library/react'
// import CreateTransactionForm from './CreateTransactionForm'
// import userEvent from '@testing-library/user-event'
// import styles from './CreateTransactionForm.module.scss'
// import { Currency } from '@/redux/currency/types'
//
// describe('Create transaction form', () => {
//
// 	const onTransactionCreation = jest.fn()
// 	const currencies: Currency[] = [ {
// 		id: 1,
// 		name: '$'
// 	} ]
//
// 	const balances: Currency[] = [ {
// 		id: 1,
// 		name: '$'
// 	} ]
//
// 	describe('amount input', () => {
// 		test('should ignore letters', () => {
// 			render(<CreateTransactionForm currencies={currencies} onTransactionCreation={onTransactionCreation}/>)
// 			const amountInput = screen.getByLabelText(/amount/)
//
// 			userEvent.type(amountInput, '100dollars')
//
// 			expect(amountInput).toHaveValue(100)
// 		})
//
// 		test('should not change in user prints text', () => {
// 			render(<CreateTransactionForm currencies={currencies} onTransactionCreation={onTransactionCreation}/>)
// 			const amountInput = screen.getByLabelText(/amount/)
//
// 			userEvent.type(amountInput, 'aslkrewl;kl;cvxz')
//
// 			expect(amountInput).toHaveValue(0)
// 		})
//
// 		test('should not change when user enters negative amount', () => {
// 			render(<CreateTransactionForm currencies={currencies} onTransactionCreation={onTransactionCreation}/>)
// 			const amountInput = screen.getByLabelText(/amount/)
//
// 			userEvent.type(amountInput, '-500')
//
// 			expect(amountInput).toHaveValue(0)
// 		})
//
// 		test('should not allow number bigger than 1000000', () => {
// 			render(<CreateTransactionForm currencies={currencies} onTransactionCreation={onTransactionCreation}/>)
// 			const amountInput = screen.getByLabelText(/amount/)
//
// 			userEvent.type(amountInput, '10000000000000')
//
// 			expect(amountInput).toHaveValue(1000000)
// 		})
// 	})
//
// 	describe('description input', () => {
// 		test('should change description value when user enter text', () => {
// 			render(<CreateTransactionForm currencies={currencies} onTransactionCreation={onTransactionCreation}/>)
// 			const descriptionInput = screen.getByLabelText(/description/)
//
// 			userEvent.type(descriptionInput, 'some user text 1000')
//
// 			expect(descriptionInput).toHaveValue('some user text 1000')
// 		})
//
// 		test('should have max length equal 75', () => {
// 			render(<CreateTransactionForm currencies={currencies} onTransactionCreation={onTransactionCreation}/>)
// 			const descriptionInput = screen.getByLabelText(/description/)
//
// 			userEvent.type(descriptionInput, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet doloremque doloribus ducimus excepturi')
//
// 			expect(descriptionInput).toHaveValue('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet do')
// 		})
// 	})
//
// 	describe('type input', () => {
//
// 		test('should switch transaction type on + click', () => {
// 			render(<CreateTransactionForm currencies={currencies} onTransactionCreation={onTransactionCreation}/>)
// 			const button = screen.getByTestId('positive-type-btn')
//
// 			userEvent.click(button)
//
// 			expect(button).toHaveClass(styles.active)
// 		})
//
// 		test('should switch transaction type on - click', () => {
// 			render(<CreateTransactionForm currencies={currencies} onTransactionCreation={onTransactionCreation}/>)
// 			const button = screen.getByTestId('negative-type-btn')
//
// 			userEvent.click(button)
//
// 			expect(button).toHaveClass(styles.active)
// 		})
// 	})
//
// 	describe('submit button', () => {
//
// 		test('should be disabled when loading', () => {
// 			render(<CreateTransactionForm currencies={currencies} loading={true} onTransactionCreation={onTransactionCreation}/>)
// 			const button = screen.getByText(/add/i)
//
// 			expect(button).toBeDisabled()
// 		})
//
// 		test('should invoke onCreation callback if form valid', () => {
// 			render(<CreateTransactionForm currencies={currencies} onTransactionCreation={onTransactionCreation}/>)
// 			const amountInput = screen.getByLabelText(/amount/i)
// 			const button = screen.getByText(/add/i)
//
// 			userEvent.type(amountInput, '100')
// 			userEvent.click(button)
//
// 			expect(onTransactionCreation).toBeCalledTimes(1)
// 		})
//
// 		test('should not invoke onCreation callback if form invalid', () => {
// 			render(<CreateTransactionForm currencies={currencies} onTransactionCreation={onTransactionCreation}/>)
// 			const button = screen.getByText(/add/i)
// 			fireEvent.click(button)
//
// 			expect(onTransactionCreation).toBeCalledTimes(0)
// 		})
// 	})
//
// })
