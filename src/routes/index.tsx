import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./app.routes";
import { AuthRouter } from "./auth.routes";

export function Routes() {
  return (
    <BrowserRouter>
      <AppRoutes />
      {/* <AuthRouter /> */}
    </BrowserRouter>
  );
}
