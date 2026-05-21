'use client'

import { motion } from 'framer-motion'
import { Award, Zap, Star, Trophy, Target, Flame } from 'lucide-react'

interface Achievement {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  xp: number
  unlocked: boolean
  level: number
  color: string
}

interface GamificationData {
  currentLevel: number
  currentXP: number
  maxXP: number
  totalXP: number
  achievements: Achievement[]
  streak: number
  rank: string
}

export const achievements: Achievement[] = [
  {
    id: 'research-published',
    title: 'Published Research',
    description: 'Research paper published in AIJFR',
    icon: <Award className="w-6 h-6" />,
    xp: 500,
    unlocked: true,
    level: 1,
    color: 'from-amber-500 to-orange-500',
  },
  {
    id: 'ai-specialist',
    title: 'AI Specialist',
    description: 'Mastered multiple AI/ML domains',
    icon: <Zap className="w-6 h-6" />,
    xp: 300,
    unlocked: true,
    level: 1,
    color: 'from-cyan-500 to-blue-500',
  },
  {
    id: 'cloud-architect',
    title: 'Cloud Architect',
    description: 'Earned Google Cloud certification',
    icon: <Trophy className="w-6 h-6" />,
    xp: 400,
    unlocked: true,
    level: 2,
    color: 'from-red-500 to-yellow-500',
  },
  {
    id: 'linux-master',
    title: 'Linux Master',
    description: 'Advanced Linux systems expertise',
    icon: <Target className="w-6 h-6" />,
    xp: 250,
    unlocked: true,
    level: 1,
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 'ml-pioneer',
    title: 'ML Pioneer',
    description: 'Completed ML specialization',
    icon: <Star className="w-6 h-6" />,
    xp: 350,
    unlocked: true,
    level: 1,
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'builder-streak',
    title: 'Builder Streak',
    description: '5+ projects completed',
    icon: <Flame className="w-6 h-6" />,
    xp: 200,
    unlocked: true,
    level: 1,
    color: 'from-red-500 to-pink-500',
  },
]

export const gamificationData: GamificationData = {
  currentLevel: 12,
  currentXP: 780,
  maxXP: 1000,
  totalXP: 11780,
  achievements: achievements,
  streak: 15,
  rank: 'Senior AI Engineer',
}

export function AchievementBadge({
  achievement,
  index,
}: {
  achievement: Achievement
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1, rotateZ: 5 }}
      className="relative group"
    >
      <div
        className={`relative w-24 h-24 rounded-full bg-gradient-to-br ${achievement.color} p-0.5 shadow-lg`}
      >
        <div className="w-full h-full bg-gradient-to-b from-gray-900 to-gray-950 rounded-full flex items-center justify-center">
          <div className="text-white">{achievement.icon}</div>
        </div>

        {achievement.unlocked && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-xs font-bold text-white border border-cyan-300">
            ✓
          </div>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: 0 }}
        className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 bg-gray-900 border border-cyan-500/30 rounded-lg px-3 py-2 text-white text-xs whitespace-nowrap pointer-events-none"
      >
        <p className="font-bold text-cyan-400">{achievement.title}</p>
        <p className="text-gray-300 text-xs">{achievement.description}</p>
        <p className="text-amber-400 font-semibold text-xs mt-1">+{achievement.xp} XP</p>
      </motion.div>
    </motion.div>
  )
}

export function GamificationWidget() {
  return null
}
