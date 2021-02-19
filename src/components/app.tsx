import * as React from 'react'

export interface HelloWorldProps {
  message: string
}

export const App = (props: HelloWorldProps) => <h1>{props.message}!</h1>
