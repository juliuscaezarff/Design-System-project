interface TextProps {
  size?: 'sm' | 'md' | 'ld';
}

export function Text({ size = 'md' }: TextProps) {

  return(
    <span className="text-gray-100 font-sans">Test</span>
  )
}