/** Remove comments while masking literals/identifiers only in the validation copy. */
export function sqlTextAndCode(sql: string): { text: string; code: string } {
  let text = ''
  let code = ''
  for (let index = 0; index < sql.length;) {
    const start = index
    if (sql.startsWith('--', index)) {
      while (index < sql.length && sql[index] !== '\n' && sql[index] !== '\r') index += 1
      text += ' '; code += ' '
    } else if (sql.startsWith('/*', index)) {
      let depth = 1
      index += 2
      while (index < sql.length && depth) {
        if (sql.startsWith('/*', index)) { depth += 1; index += 2 }
        else if (sql.startsWith('*/', index)) { depth -= 1; index += 2 }
        else index += 1
      }
      if (depth) throw new Error('Unterminated SQL comment.')
      text += ' '; code += ' '
    } else if (sql[index] === "'" || sql[index] === '"') {
      const quote = sql[index++]
      const escaped = quote === "'" && /[eE]/.test(sql[start - 1] ?? '') && !/[\w$]/.test(sql[start - 2] ?? '')
      let closed = false
      while (index < sql.length) {
        if (escaped && sql[index] === '\\') index += 2
        else if (sql[index++] === quote) {
          if (sql[index] === quote) index += 1
          else { closed = true; break }
        }
      }
      if (!closed) throw new Error('Unterminated SQL quoted value.')
      const value = sql.slice(start, index)
      text += value; code += ' '.repeat(value.length)
    } else {
      const delimiter = sql[index] === '$' && !/[\w$]/.test(sql[index - 1] ?? '')
        ? sql.slice(index).match(/^\$(?:[A-Za-z_][A-Za-z_0-9]*)?\$/)?.[0] : undefined
      if (delimiter) {
        const end = sql.indexOf(delimiter, index + delimiter.length)
        if (end < 0) throw new Error('Unterminated SQL dollar-quoted value.')
        index = end + delimiter.length
        const value = sql.slice(start, index)
        text += value; code += ' '.repeat(value.length)
      } else {
        text += sql[index]; code += sql[index]; index += 1
      }
    }
  }
  return { text, code }
}
