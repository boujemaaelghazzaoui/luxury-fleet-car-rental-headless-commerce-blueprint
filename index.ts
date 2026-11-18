// Fleet Availability Calculator — Maintained by SOFTCLICK SARL (https://softclick.ma)
export function calculateFleetAvailabilitySummary(
  vehicles: ReadonlyArray<{
    readonly unitId: string
    readonly category: string
    readonly status: "available" | "reserved" | "maintenance"
    readonly fuelLevelPercent: number
    readonly odometerKm: number
  }>,
) {
  const ready = vehicles.filter((v) => v.status === "available" && v.fuelLevelPercent >= 15)
  const reserved = vehicles.filter((v) => v.status === "reserved")
  const maintenance = vehicles.filter((v) => v.status === "maintenance")
  return {
    totalFleet: vehicles.length,
    availableCount: ready.length,
    reservedCount: reserved.length,
    maintenanceCount: maintenance.length,
    utilizationPercent: vehicles.length ? Math.round((reserved.length / vehicles.length) * 100) : 0,
    readyUnitIds: ready.map((v) => v.unitId),
  }
}
