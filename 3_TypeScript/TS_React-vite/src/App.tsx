import { RequiredProps } from "./components/RequiredProps";
import { OptionalProps } from "./components/OptionalProps";
import { DefaultProps } from "./components/DefaultProps";
import { ChildrenExample } from "./components/ChildrenExample";
import { AsConstExample } from "./components/AsConstExample";
import { ComponentPropsExample } from "./components/ComponentPropsExample";
import { StateExample } from "./components/StateExample";
import { EventExample } from "./components/EventExample";
import { ReducerExample } from "./components/ReducerExample";
import { CounterProvider } from "./components/context/CounterContext";
import { CounterDisplay } from "./components/context/CounterDisplay";

export default function App() {
  return (
    
    <CounterProvider>
      <h1>React + TypeScript Examples</h1>

      <RequiredProps name="John" age={30} />
      <hr/>

      <OptionalProps title="Hello Optional" />
      <OptionalProps />

      <hr/>


      <DefaultProps />
      <DefaultProps msg="Custom default" />
      <hr/>

      <ChildrenExample>
        <p>This is passed as children</p>
      </ChildrenExample>
      <hr/>

      <AsConstExample status="loading" />
      <hr/>

      <ComponentPropsExample onClick={() => alert("Clicked!")}>
        Styled Button
      </ComponentPropsExample>
      <hr/>

      <StateExample />
      <hr/>

      <EventExample />
      <hr/>

      <ReducerExample />
      <hr/>

      <CounterDisplay />
    </CounterProvider>
  );
}
