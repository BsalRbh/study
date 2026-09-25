function levenshtein(a: string, b: string): number {
  const dp: number[][] = Array.from({ length: a.length + 1 }, (_, i) =>
    Array.from({ length: b.length + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0))
  );
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      dp[i][j] =
        a[i - 1] === b[j - 1]
          ? dp[i - 1][j - 1]
          : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[a.length][b.length];
}

function normalize(text: string): string {
  return text.trim().toLowerCase().replace(/[^a-z0-9 ]/g, "");
}

export function isCloseEnough(input: string, target: string): boolean {
  const a = normalize(input);
  const b = normalize(target);
  if (!a) return false;
  if (a === b) return true;
  const distance = levenshtein(a, b);
  const threshold = Math.max(2, Math.floor(b.length * 0.2));
  return distance <= threshold;
}
