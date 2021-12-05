export interface AccessProps {
  /**
   * 可访问条件
   */
  require: boolean;

  /**
   * 可访问条件为true时展示的元素(方式一)
   */
  accessible?: React.ReactNode;

  /**
   * 可访问条件为false时展示的元素
   */
  fallback?: React.ReactNode;

  /**
   * 可访问条件为true时展示的元素(方式二)
   */
  children?: React.ReactNode;
}

export default function Access({
  require,
  accessible,
  fallback,
  children,
}: AccessProps): JSX.Element {
  return <>{require ? accessible ?? children : fallback}</>;
}
