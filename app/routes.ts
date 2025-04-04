import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
    index("routes/page.tsx"),
    route("/account/sign-in", "routes/account/sign-in/page.tsx"),
    route("/account/sign-up", "routes/account/sign-up/page.tsx"),

    layout("routes/dashboard/layout.tsx" , [
        route("/dashboard", "routes/dashboard/page.tsx"),
    ]),
    route("error", "routes/error/page.tsx"),
] satisfies RouteConfig;
