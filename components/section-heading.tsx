import React from 'react'

type SectionHeadingProps = {
    children: React.ReactNode;
};

export default function SectionHeading({
    children }: SectionHeadingProps) {
  return (
    <div className='text-3xl font-medium capitalize mb-8 text-center'>{children}</div>
  )
}
