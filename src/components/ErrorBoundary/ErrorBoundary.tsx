import React from 'react'

type ErrorBoundaryState = {
	hasError: boolean
}

type ErrorBoundaryProps = Record<string, unknown>

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError(error: unknown) {
		// Update state so the next render will show the fallback UI.
		console.log(error)
		return { hasError: true }
	}

	componentDidCatch(error: unknown, errorInfo: unknown) {
		// You can also log the error to an error reporting service
		// logErrorToMyService(error, errorInfo);
		console.log(error, errorInfo)
	}

	render() {
		if (this.state.hasError) {
			// You can render any custom fallback UI
			return <h1>Something went wrong.</h1>
		}

		return this.props.children
	}
}

export default ErrorBoundary
