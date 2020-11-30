import { Button, useClipboard } from '@chakra-ui/react'
import React from 'react'

export default function CopyButton({ value }) {
  const { onCopy, hasCopied } = useClipboard(value)
  return (
    <Button
      color="brand.lightGrey"
      aria-label="Copy text"
      textTransform="uppercase"
      fontWeight={600}
      role="button"
      onClick={onCopy}
    >
      {hasCopied ? 'Yay!' : 'Grab It'}
    </Button>
  )
}
