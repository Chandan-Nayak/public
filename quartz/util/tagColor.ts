/**
 * Tag Color Generation Utility
 * Generates consistent, accessible colors for tags based on tag name hash
 */

// Color palette - vibrant, distinct colors with good contrast
const COLOR_PALETTE = [
  { bg: "#FF6B6B", text: "#FFFFFF" }, // Red
  { bg: "#4ECDC4", text: "#FFFFFF" }, // Teal
  { bg: "#45B7D1", text: "#FFFFFF" }, // Blue
  { bg: "#96CEB4", text: "#FFFFFF" }, // Green
  { bg: "#FFEAA7", text: "#2D3436" }, // Yellow
  { bg: "#DDA0DD", text: "#FFFFFF" }, // Plum
  { bg: "#F8B739", text: "#FFFFFF" }, // Orange
  { bg: "#9B59B6", text: "#FFFFFF" }, // Purple
  { bg: "#E74C3C", text: "#FFFFFF" }, // Bright Red
  { bg: "#3498DB", text: "#FFFFFF" }, // Bright Blue
  { bg: "#2ECC71", text: "#FFFFFF" }, // Bright Green
  { bg: "#F39C12", text: "#FFFFFF" }, // Dark Orange
  { bg: "#1ABC9C", text: "#FFFFFF" }, // Turquoise
  { bg: "#D35400", text: "#FFFFFF" }, // Pumpkin
  { bg: "#C0392B", text: "#FFFFFF" }, // Dark Red
]

/**
 * Simple hash function to convert string to number
 */
function hashString(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash // Convert to 32bit integer
  }
  return Math.abs(hash)
}

/**
 * Get consistent color pair for a tag
 * @param tagName - The tag name to generate color for
 * @returns Object with bg and text color hex values
 */
export function getTagColor(tagName: string): { bg: string; text: string } {
  const hash = hashString(tagName)
  const index = hash % COLOR_PALETTE.length
  return COLOR_PALETTE[index]
}

/**
 * Sanitize tag name for use in CSS class names
 * Replaces special characters and spaces with hyphens
 */
export function sanitizeTagForClass(tagName: string): string {
  return tagName
    .toLowerCase()
    .replace(/[^a-z0-9-_]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
}

/**
 * Generate inline style object for tag colors
 */
export function getTagStyle(tagName: string): Record<string, string> {
  const color = getTagColor(tagName)
  return {
    color: color.bg,
  }
}
