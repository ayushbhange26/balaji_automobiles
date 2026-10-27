import {
  BatteryCharging,
  CarFront,
  CircleDot,
  CircleStop,
  Droplets,
  Gauge,
  Settings2,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Wrench,
} from 'lucide-react';
import type { ServiceIconName } from '../../data/services';

const icons = {
  wrench: Wrench,
  engine: Gauge,
  oil: Droplets,
  brake: CircleStop,
  battery: BatteryCharging,
  ac: Snowflake,
  suspension: Settings2,
  wheel: CircleDot,
  wash: Sparkles,
  preventive: ShieldCheck,
  toyota: CarFront,
} as const;

type ServiceIconProps = {
  name: ServiceIconName;
  className?: string;
};

export function ServiceIcon({ name, className = 'size-5' }: ServiceIconProps) {
  const Icon = icons[name];
  return <Icon className={className} aria-hidden="true" />;
}
