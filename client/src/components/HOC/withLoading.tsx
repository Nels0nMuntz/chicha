import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';


const withLoading = <P extends object>(Component: React.ComponentType<P>) => {

    // const HOC : React.FC<P & WithLoadingProps> = (props) => {
    //     return props.isLoading ? <p>Loading...</p> : <Component {...props} />;
    // };

    // const Wrapper : React.FC<P & WithLoadingProps> = (props) => {
    //     const isloading = useSelector((state: RootState) => state.loading.isloading);
    //     return <HOC {...props} isLoading={isloading}/>
    // };

    // return Wrapper

    // const isloading = useSelector((state: RootState) => state.loading.isloading)

    const HOC: React.FC<P> = (props) => {

        const isLoading = useSelector((state: RootState) => state.loading.isloading)

        return isLoading ? <p>Loading...</p> : <Component {...props as P} />;
    };

    return HOC;
};

export default withLoading;

