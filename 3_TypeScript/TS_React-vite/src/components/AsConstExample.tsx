const STATUS = {
  SUCCESS: "success",
  ERROR: "error",
  LOADING: "loading",
} as const;

type StatusType = (typeof STATUS)[keyof typeof STATUS];

export const AsConstExample = ({ status }: { status: StatusType }) => {
  return <p className={`status-${status}`}>Status: {status}</p>;
};
