import type { ImpactStat } from '../content/types'

export function StatBlock({ value, label }: ImpactStat) {
  return (
    <div className="stat-block" data-testid="stat-block">
      <div className="stat-numeral">{value}</div>
      <div className="eyebrow">{label}</div>
    </div>
  )
}
