import React, { ReactNode } from 'react';

import style from "./StartPageLayout.module.scss";


type StartPageLayoutProps = {
    title: string
    subtitle: string
    children?: ReactNode
};

const StartPageLayout: React.FC<StartPageLayoutProps> = ({ title, subtitle, children }) => {

    return (
        <section className={style.wrapper}>
            <div className={style.content}>
                <h1 className={style.content_title}>{title}</h1>
                <p className={style.content_subtitle}>{subtitle}</p>
                <div className={style.content_formWrapper}>
                    {children}
                </div>
            </div>
        </section>
    );
};

export default StartPageLayout;