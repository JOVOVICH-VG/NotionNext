import { siteConfig } from '@/lib/config'

// /**
//  * 驱动版权
//  * @returns
//  */
// export default function PoweredBy(props) {
//   return (
//     <div className={`inline text-sm font-serif ${props.className || ''}`}>
//       <span className='mr-1'>Powered by</span>
//       <a
//         href=''
//         className='underline justify-start'>
//         NotionNext {siteConfig('VERSION')}
//       </a>
//       .
//     </div>
//   )
// }
/**
 * 网站运行时间统计
 * @returns
 */
export default function PoweredBy(props) {
  const calculateDays = () => {
    const startDate = new Date(siteConfig('SITE_CREATE_TIME') || '2025-04-010')
    const today = new Date()
    const timeDiff = today.getTime() - startDate.getTime()
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
    return days
  }

  return (
    <div className={`inline text-sm font-serif ${props.className || ''}`}>
      <span className='mr-1'>本站已运行 {calculateDays()} 天</span>
    </div>
  )
}