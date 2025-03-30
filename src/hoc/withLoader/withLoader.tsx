import { PropsWithChildren, ReactNode } from 'react';

interface Props extends PropsWithChildren {
  isLoading: boolean,
  loadingElement: ReactNode
  isError?: boolean,
  errorElement?: ReactNode,
  isNoData?: boolean,
  noDataElement?: ReactNode
};


export function WithLoader({
  children,
  isLoading,
  loadingElement,
  isError,
  errorElement,
  isNoData,
  noDataElement
}: Props) {
  const showData = !isError && !isLoading && !isNoData;
  const showNoData = !isError && !isLoading && isNoData;
  const showLoading = !isError && isLoading;
  
  return (
    <>
      { isError && errorElement }
      { showNoData && noDataElement }
      { showLoading && loadingElement }
      { showData && children }
    </>
  );
}