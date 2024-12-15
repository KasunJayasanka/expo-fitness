// Utility to format text (capitalize first letter and lowercase the rest)
export const formatText = (text) => {
    if (!text) return '';
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };
  