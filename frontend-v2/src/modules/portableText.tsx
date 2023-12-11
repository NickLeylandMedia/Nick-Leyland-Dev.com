export const components = {
  block: {
    h1: ({ children }: any) => {
      return <h1 className="primary">{children}</h1>;
    },
    normal: ({ children }: any) => {
      return <p className="">{children}</p>;
    },
  },
};
