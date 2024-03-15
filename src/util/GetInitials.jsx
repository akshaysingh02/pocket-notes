export const getInitials = (name) => {
    const words = name.trim().split(" ");
    const firstInitial = words[0][0] || "";
    const lastInitial = words.length > 1 ? words[words.length - 1][0] : "";
    return (firstInitial + lastInitial).toUpperCase();
  };