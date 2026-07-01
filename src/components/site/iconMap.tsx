import {
  FileText, Code2, ShieldCheck, KeyRound, ClipboardCheck, Send, Wallet, Undo2,
  PhoneCall, BadgeCheck, Bot, BarChart3, Stethoscope, Users, HeartPulse, Siren,
  Brain, HeartHandshake, Pill, Activity, Bone, Baby, Scan, Flower2, Zap, Dumbbell,
  PersonStanding, ScanLine, Microscope, Droplets, Video, Building2,
  type LucideIcon,
} from "lucide-react";

export const ICON_MAP: Record<string, LucideIcon> = {
  FileText, Code2, ShieldCheck, KeyRound, ClipboardCheck, Send, Wallet, Undo2,
  PhoneCall, BadgeCheck, Bot, BarChart3, Stethoscope, Users, HeartPulse, Siren,
  Brain, HeartHandshake, Pill, Activity, Bone, Baby, Scan, Flower2, Zap, Dumbbell,
  PersonStanding, ScanLine, Microscope, Droplets, Video, Building2,
};

export function getIcon(name: string): LucideIcon {
  return ICON_MAP[name] ?? FileText;
}