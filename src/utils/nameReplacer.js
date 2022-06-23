const nameReplacer = ( text ) => typeof text !== 'string' ? false : text.replace(/\s/gm, "-").toLowerCase()

export default nameReplacer