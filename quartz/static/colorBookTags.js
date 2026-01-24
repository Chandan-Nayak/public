// Color palette for tags (same as tagColor.ts)
const TAG_COLORS = [
  '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
  '#DDA0DD', '#F8B739', '#9B59B6', '#E74C3C', '#3498DB',
  '#2ECC71', '#F39C12', '#1ABC9C', '#D35400', '#C0392B'
];

// Simple hash function (matches tagColor.ts)
function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

// Get color for a tag (matches tagColor.ts getTagColor)
function getTagColor(tagName) {
  const sanitized = tagName.replace(/^#/, '').toLowerCase().trim();
  const colorIndex = hashString(sanitized) % TAG_COLORS.length;
  const color = TAG_COLORS[colorIndex];
  return {
    bg: color,
    text: color
  };
}

// Color all book tags on page load
document.addEventListener('DOMContentLoaded', function() {
  // Tags are now styled with CSS only - no JavaScript coloring needed
});
