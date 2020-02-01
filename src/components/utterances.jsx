import React, { useEffect } from 'react'

const src = 'https://utteranc.es/client.js'
const branch = 'master'

const Utterences = ({ repo }) => {
  const rootElm = React.createRef()

  useEffect(() => {
    const utterances = document.createElement('script')
    const utterancesConfig = {
      src,
      repo,
      branch,
      async: true,
      'issue-term': 'pathname',
    }


    Object.keys(utterancesConfig).forEach(configKey => {
      utterances.setAttribute(configKey, utterancesConfig[configKey])
    })
    rootElm.current.appendChild(utterances)
  }, [])

  return <div className="utterences" ref={rootElm} />
}

export default Utterences;