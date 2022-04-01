import { Provider } from "react-redux"
import { AppRoute } from "./routes/AppRoute"
import { store } from "./store/store"
import "./App.css"
export const AppIot = () => {
    return (
        <Provider store={store}>
            <AppRoute />
        </Provider>
    )
}