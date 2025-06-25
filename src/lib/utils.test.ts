import { cn } from './utils'

describe('cn', () => {
  it("joins multiple classes", () => {
    expect(cn('a', 'b')).toBe('a b')
  })

  it('handles arrays', () => {
    expect(cn(['a', false, 'b'])).toBe('a b')
  })
})
