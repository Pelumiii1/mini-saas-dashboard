type MetricProps = {
  label: string;
  value: string | number;
};

export default function Metric({ label, value }: MetricProps) {
  return (
    <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-4">
      <h3 className="text-lg font-medium text-gray-500 dark:text-gray-300">{label}</h3>
      <p className="text-3xl font-bold text-gray-900 dark:text-white">{value}</p>
    </div>
  );
}
