interface HeadProps {
  title: string
}

function Head({ title }: HeadProps) {
  document.title = title

  return null
}

export { Head }
