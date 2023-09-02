'use client';

import { FluentProvider, webDarkTheme } from "@fluentui/react-components";

const AppProvider = ({children}: {children: React.ReactNode}) => {
    return (<FluentProvider theme={webDarkTheme}>{children}</FluentProvider>);
}

export default AppProvider;