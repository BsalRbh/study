import type { SubjectContent } from "@/content/types";

// String.raw keeps LaTeX backslashes intact; never write "$" directly before "{" in these strings.
const m = String.raw;

const U1 = "Unit 1: Matrix and Determinant";
const U2 = "Unit 2: Derivatives";
const U3 = "Unit 3: Integral Calculus";
const U4 = "Unit 4: Laplace Transform";
const U5 = "Unit 5: Fourier Series";

export const mathContent: SubjectContent = {
  flashcards: [
    // Unit 1: Matrix and Determinant
    {
      id: "fc-1",
      unit: U1,
      tier: "core",
      front: "How do you evaluate a 3×3 determinant?",
      back: m`Expand along the first row with signs $+,-,+$: $|A| = a_{11}(a_{22}a_{33}-a_{23}a_{32}) - a_{12}(a_{21}a_{33}-a_{23}a_{31}) + a_{13}(a_{21}a_{32}-a_{22}a_{31})$`,
    },
    {
      id: "fc-2",
      unit: U1,
      tier: "core",
      front: "Key properties of determinants",
      back: m`Swapping two rows changes the sign; two identical (or proportional) rows give $|A|=0$; $|A^T| = |A|$; $|AB| = |A||B|$; the operation $R_i \to R_i + kR_j$ does not change $|A|$.`,
    },
    {
      id: "fc-3",
      unit: U1,
      tier: "core",
      front: "What is a singular matrix?",
      back: m`A square matrix with $|A| = 0$. It has no inverse. If $|A| \neq 0$ the matrix is non-singular and $A^{-1}$ exists.`,
    },
    {
      id: "fc-4",
      unit: U1,
      tier: "core",
      front: "Inverse of a matrix using the adjoint",
      back: m`$A^{-1} = \dfrac{\operatorname{adj} A}{|A|}$, valid only when $|A| \neq 0$. adj $A$ is the transpose of the cofactor matrix.`,
    },
    {
      id: "fc-5",
      unit: U1,
      tier: "core",
      front: "Three elementary row operations",
      back: m`(1) Interchange: $R_i \leftrightarrow R_j$; (2) Scaling: $R_i \to kR_i$ with $k \neq 0$; (3) Replacement: $R_i \to R_i + kR_j$.`,
    },
    {
      id: "fc-6",
      unit: U1,
      tier: "core",
      front: "Steps of the Gauss Elimination method",
      back: m`Write the augmented matrix $[A \mid B]$, then use row operations to reduce $A$ to upper-triangular (echelon) form, and solve by back substitution starting from the last equation.`,
    },
    {
      id: "fc-7",
      unit: U1,
      tier: "core",
      front: "Steps of the Gauss-Jordan method for the inverse",
      back: m`Write $[A \mid I]$ and apply row operations until the left block becomes $I$. The right block is then $A^{-1}$, giving $[I \mid A^{-1}]$. Finally, verify with $AA^{-1} = I$.`,
    },
    {
      id: "fc-8",
      unit: U1,
      tier: "core",
      front: "Rank of a matrix",
      back: m`$\rho(A)$ is the number of non-zero rows once $A$ is reduced to echelon form, which equals the order of the largest non-vanishing minor.`,
    },
    {
      id: "fc-9",
      unit: U1,
      tier: "core",
      front: "Consistency of $AX = B$ using rank ($n$ unknowns)",
      back: m`If $\rho(A) \neq \rho([A|B])$ the system is inconsistent (no solution). If $\rho(A) = \rho([A|B]) = n$ there is a unique solution. If $\rho(A) = \rho([A|B]) < n$ there are infinitely many solutions.`,
    },
    {
      id: "fc-10",
      unit: U1,
      tier: "core",
      front: "Definition of eigenvalue and eigenvector",
      back: m`If $AX = \lambda X$ for some non-zero vector $X$, then $\lambda$ is an eigenvalue and $X$ an eigenvector. The eigenvalues are the roots of the characteristic equation $|A - \lambda I| = 0$.`,
    },
    {
      id: "fc-11",
      unit: U1,
      tier: "core",
      front: "Shortcut characteristic equation for a 3×3 matrix",
      back: m`$\lambda^3 - S_1\lambda^2 + S_2\lambda - |A| = 0$, where $S_1$ is the trace and $S_2$ is the sum of the three principal 2×2 minors.`,
    },
    {
      id: "fc-12",
      unit: U1,
      tier: "core",
      front: "How do you find eigenvectors once the eigenvalues are known?",
      back: m`For each $\lambda$, solve $(A - \lambda I)X = 0$. For a 3×3, take two independent rows and use cross-multiplication: $\frac{x}{b_1c_2-b_2c_1} = \frac{y}{c_1a_2-c_2a_1} = \frac{z}{a_1b_2-a_2b_1}$. Any non-zero multiple is also an eigenvector.`,
    },
    {
      id: "fc-13",
      unit: U1,
      tier: "core",
      front: "Sum and product of eigenvalues",
      back: m`Sum of eigenvalues $=$ trace of $A$ (sum of the diagonal); product of eigenvalues $= |A|$. Use both to check your answer.`,
    },
    {
      id: "fc-14",
      unit: U1,
      tier: "hedge",
      front: "Eigenvalues of related matrices",
      back: m`A triangular or diagonal matrix has its diagonal entries as eigenvalues. If $\lambda$ is an eigenvalue of $A$, then $A^{-1}$ has $\frac{1}{\lambda}$, $A^k$ has $\lambda^k$, $kA$ has $k\lambda$, and $A^T$ has the same $\lambda$.`,
    },
    {
      id: "fc-15",
      unit: U1,
      tier: "hedge",
      front: "What is a vector space?",
      back: m`A set $V$ with vector addition and scalar multiplication that is closed under both and satisfies the axioms: commutativity, associativity, a zero vector, additive inverses, distributive laws, and $1\cdot v = v$. Example: $\mathbb{R}^n$.`,
    },
    {
      id: "fc-16",
      unit: U1,
      tier: "hedge",
      front: "Linearly dependent vs independent vectors",
      back: m`Vectors are independent if $c_1v_1 + \dots + c_nv_n = 0$ only when every $c_i = 0$; otherwise they are dependent. For $n$ vectors in $\mathbb{R}^n$: det $\neq 0$ means independent, det $= 0$ means dependent.`,
    },
    {
      id: "fc-17",
      unit: U1,
      tier: "hedge",
      front: "What is a linear transformation?",
      back: m`A map $T: V \to W$ with $T(u+v) = T(u) + T(v)$ and $T(cu) = cT(u)$. In matrix form it is $Y = AX$, e.g. rotation, scaling, reflection.`,
    },
    {
      id: "fc-18",
      unit: U1,
      tier: "hedge",
      front: "Applications of eigenvalues and eigenvectors",
      back: m`Diagonalisation $A = PDP^{-1}$ (for fast powers $A^n$), natural frequencies in vibration analysis, stability of systems, Principal Component Analysis in data science, Google PageRank, and principal stresses in engineering.`,
    },

    // Unit 2: Derivatives
    {
      id: "fc-19",
      unit: U2,
      tier: "core",
      front: "Definition of the derivative (first principle)",
      back: m`$f'(x) = \lim_{h \to 0} \dfrac{f(x+h) - f(x)}{h}$, provided the limit exists.`,
    },
    {
      id: "fc-20",
      unit: U2,
      tier: "core",
      front: "Power, constant and sum rules",
      back: m`$\frac{d}{dx}x^n = nx^{n-1}$; $\frac{d}{dx}c = 0$; $\frac{d}{dx}[cf] = cf'$; $\frac{d}{dx}[f \pm g] = f' \pm g'$.`,
    },
    {
      id: "fc-21",
      unit: U2,
      tier: "core",
      front: "Product rule",
      back: m`$\dfrac{d}{dx}(uv) = u\dfrac{dv}{dx} + v\dfrac{du}{dx}$`,
    },
    {
      id: "fc-22",
      unit: U2,
      tier: "core",
      front: "Quotient rule",
      back: m`$\dfrac{d}{dx}\left(\dfrac{u}{v}\right) = \dfrac{v\,u' - u\,v'}{v^2}$, where $v \neq 0$.`,
    },
    {
      id: "fc-23",
      unit: U2,
      tier: "core",
      front: "Chain rule",
      back: m`If $y = f(u)$ and $u = g(x)$, then $\dfrac{dy}{dx} = \dfrac{dy}{du}\cdot\dfrac{du}{dx}$. Example: $\frac{d}{dx}\sin(x^2) = 2x\cos(x^2)$.`,
    },
    {
      id: "fc-24",
      unit: U2,
      tier: "core",
      front: "Derivatives of the six trigonometric functions",
      back: m`$\sin x \to \cos x$; $\cos x \to -\sin x$; $\tan x \to \sec^2 x$; $\cot x \to -\csc^2 x$; $\sec x \to \sec x\tan x$; $\csc x \to -\csc x\cot x$`,
    },
    {
      id: "fc-25",
      unit: U2,
      tier: "core",
      front: "Derivatives of exponential and logarithmic functions",
      back: m`$e^x \to e^x$; $a^x \to a^x\ln a$; $\ln x \to \frac{1}{x}$; $\log_a x \to \frac{1}{x\ln a}$`,
    },
    {
      id: "fc-26",
      unit: U2,
      tier: "core",
      front: "Derivatives of inverse trigonometric functions",
      back: m`$\sin^{-1}x \to \frac{1}{\sqrt{1-x^2}}$; $\cos^{-1}x \to \frac{-1}{\sqrt{1-x^2}}$; $\tan^{-1}x \to \frac{1}{1+x^2}$; $\cot^{-1}x \to \frac{-1}{1+x^2}$; $\sec^{-1}x \to \frac{1}{|x|\sqrt{x^2-1}}$`,
    },
    {
      id: "fc-27",
      unit: U2,
      tier: "hedge",
      front: "Hyperbolic functions and their derivatives",
      back: m`$\sinh x = \frac{e^x - e^{-x}}{2}$, $\cosh x = \frac{e^x + e^{-x}}{2}$. Derivatives: $\sinh x \to \cosh x$; $\cosh x \to \sinh x$; $\tanh x \to \operatorname{sech}^2 x$. Identity: $\cosh^2x - \sinh^2x = 1$.`,
    },
    {
      id: "fc-28",
      unit: U2,
      tier: "core",
      front: m`Logarithmic differentiation (for $y = u^v$)`,
      back: m`Take logs: $\ln y = v\ln u$. Differentiate: $\frac{1}{y}\frac{dy}{dx} = v'\ln u + v\frac{u'}{u}$. So $\frac{dy}{dx} = u^v\left(v'\ln u + \frac{vu'}{u}\right)$.`,
    },
    {
      id: "fc-29",
      unit: U2,
      tier: "core",
      front: "L'Hôpital's Rule",
      back: m`If $\lim \frac{f(x)}{g(x)}$ gives $\frac{0}{0}$ or $\frac{\infty}{\infty}$, then it equals $\lim \frac{f'(x)}{g'(x)}$. Differentiate the numerator and denominator separately (NOT with the quotient rule), and repeat while still indeterminate.`,
    },
    {
      id: "fc-30",
      unit: U2,
      tier: "core",
      front: "Other indeterminate forms and how to convert them",
      back: m`$0\cdot\infty$: rewrite $fg$ as $\frac{f}{1/g}$. $\infty - \infty$: combine into one fraction. $1^\infty, 0^0, \infty^0$: let $y = f^g$, take $\ln y$, find its limit $L$, then the answer is $e^L$.`,
    },
    {
      id: "fc-31",
      unit: U2,
      tier: "hedge",
      front: "Standard limits",
      back: m`$\lim_{x\to0}\frac{\sin x}{x} = 1$; $\lim_{x\to0}\frac{e^x - 1}{x} = 1$; $\lim_{x\to0}\frac{a^x-1}{x} = \ln a$; $\lim_{n\to\infty}\left(1+\frac{1}{n}\right)^n = e$`,
    },
    {
      id: "fc-32",
      unit: U2,
      tier: "hedge",
      front: "Substitution trick for inverse-trig derivatives",
      back: m`Put $x = \tan\theta$: $\tan^{-1}\frac{2x}{1-x^2} = 2\tan^{-1}x$, $\sin^{-1}\frac{2x}{1+x^2} = 2\tan^{-1}x$, $\cos^{-1}\frac{1-x^2}{1+x^2} = 2\tan^{-1}x$. Each derivative is $\frac{2}{1+x^2}$.`,
    },

    // Unit 3: Integral Calculus
    {
      id: "fc-33",
      unit: U3,
      tier: "core",
      front: "Basic integrals: powers, 1/x, exponentials",
      back: m`$\int x^n\,dx = \frac{x^{n+1}}{n+1} + C$ ($n \neq -1$); $\int \frac{1}{x}\,dx = \ln|x| + C$; $\int e^{ax}dx = \frac{e^{ax}}{a} + C$; $\int a^x dx = \frac{a^x}{\ln a} + C$`,
    },
    {
      id: "fc-34",
      unit: U3,
      tier: "core",
      front: "Trigonometric integrals",
      back: m`$\int\sin x = -\cos x$; $\int\cos x = \sin x$; $\int\sec^2x = \tan x$; $\int\tan x = \ln|\sec x|$; $\int\sec x = \ln|\sec x + \tan x|$; $\int\csc^2x = -\cot x$ (all $+C$)`,
    },
    {
      id: "fc-35",
      unit: U3,
      tier: "core",
      front: "Standard integrals with a² ± x²",
      back: m`$\int\frac{dx}{x^2+a^2} = \frac{1}{a}\tan^{-1}\frac{x}{a}$; $\int\frac{dx}{\sqrt{a^2-x^2}} = \sin^{-1}\frac{x}{a}$; $\int\frac{dx}{x^2-a^2} = \frac{1}{2a}\ln\left|\frac{x-a}{x+a}\right|$; $\int\frac{dx}{\sqrt{x^2+a^2}} = \ln|x + \sqrt{x^2+a^2}|$`,
    },
    {
      id: "fc-36",
      unit: U3,
      tier: "core",
      front: "Integration by parts",
      back: m`$\int u\,dv = uv - \int v\,du$. Choose $u$ using ILATE order: Inverse trig, Logarithmic, Algebraic, Trigonometric, Exponential.`,
    },
    {
      id: "fc-37",
      unit: U3,
      tier: "core",
      front: "Integration by substitution",
      back: m`$\int f(g(x))g'(x)\,dx = \int f(u)\,du$ with $u = g(x)$. In a definite integral, change the limits too (or substitute back before applying the old limits).`,
    },
    {
      id: "fc-38",
      unit: U3,
      tier: "core",
      front: "Trigonometric substitutions",
      back: m`$\sqrt{a^2 - x^2}$: put $x = a\sin\theta$. $\sqrt{a^2 + x^2}$: put $x = a\tan\theta$. $\sqrt{x^2 - a^2}$: put $x = a\sec\theta$.`,
    },
    {
      id: "fc-39",
      unit: U3,
      tier: "core",
      front: "Partial fraction forms",
      back: m`Distinct linear factor: $\frac{A}{x-a}$. Repeated factor: $\frac{A}{x-a} + \frac{B}{(x-a)^2}$. Irreducible quadratic: $\frac{Ax+B}{x^2+bx+c}$. If the numerator's degree is at least the denominator's, divide first.`,
    },
    {
      id: "fc-40",
      unit: U3,
      tier: "core",
      front: "Definite integral and its key properties",
      back: m`$\int_a^b f(x)\,dx = F(b) - F(a)$. For odd $f$: $\int_{-a}^{a} f = 0$. For even $f$: $\int_{-a}^{a} f = 2\int_0^a f$. Also $\int_a^b f = -\int_b^a f$.`,
    },
    {
      id: "fc-41",
      unit: U3,
      tier: "core",
      front: "Area under a curve",
      back: m`The area between $y = f(x)$, the x-axis, $x=a$ and $x=b$ is $A = \int_a^b |y|\,dx$. Split the integral wherever the curve crosses the axis.`,
    },
    {
      id: "fc-42",
      unit: U3,
      tier: "hedge",
      front: "Arc length of a curve",
      back: m`$L = \int_a^b \sqrt{1 + \left(\frac{dy}{dx}\right)^2}\,dx$`,
    },
    {
      id: "fc-43",
      unit: U3,
      tier: "hedge",
      front: "Volume of a solid of revolution",
      back: m`About the x-axis: $V = \pi\int_a^b y^2\,dx$. About the y-axis: $V = \pi\int_c^d x^2\,dy$. (Disc method.)`,
    },
    {
      id: "fc-44",
      unit: U3,
      tier: "hedge",
      front: "Surface area of revolution (about the x-axis)",
      back: m`$S = 2\pi\int_a^b y\sqrt{1 + \left(\frac{dy}{dx}\right)^2}\,dx$`,
    },
    {
      id: "fc-45",
      unit: U3,
      tier: "hedge",
      front: "Average value of a function on [a, b]",
      back: m`$f_{avg} = \dfrac{1}{b-a}\int_a^b f(x)\,dx$`,
    },
    {
      id: "fc-46",
      unit: U3,
      tier: "hedge",
      front: "Improper integrals",
      back: m`These have an infinite limit or an infinite discontinuity: $\int_a^\infty f\,dx = \lim_{b\to\infty}\int_a^b f\,dx$. The integral converges if the limit is finite and diverges otherwise. Key fact: $\int_1^\infty \frac{dx}{x^p}$ converges only when $p > 1$.`,
    },

    // Unit 4: Laplace Transform
    {
      id: "fc-47",
      unit: U4,
      tier: "core",
      front: "Definition of the Laplace transform",
      back: m`$\mathcal{L}\{f(t)\} = F(s) = \int_0^\infty e^{-st}f(t)\,dt$, defined for $s$ large enough that the integral converges.`,
    },
    {
      id: "fc-48",
      unit: U4,
      tier: "core",
      front: m`Laplace of $1$, $t^n$, $e^{at}$`,
      back: m`$\mathcal{L}\{1\} = \frac{1}{s}$; $\mathcal{L}\{t^n\} = \frac{n!}{s^{n+1}}$; $\mathcal{L}\{e^{at}\} = \frac{1}{s-a}$ (for $s > a$)`,
    },
    {
      id: "fc-49",
      unit: U4,
      tier: "core",
      front: "Laplace of sin, cos, sinh, cosh",
      back: m`$\mathcal{L}\{\sin at\} = \frac{a}{s^2+a^2}$; $\mathcal{L}\{\cos at\} = \frac{s}{s^2+a^2}$; $\mathcal{L}\{\sinh at\} = \frac{a}{s^2-a^2}$; $\mathcal{L}\{\cosh at\} = \frac{s}{s^2-a^2}$`,
    },
    {
      id: "fc-50",
      unit: U4,
      tier: "core",
      front: "Linearity property",
      back: m`$\mathcal{L}\{af(t) + bg(t)\} = aF(s) + bG(s)$. The same holds for $\mathcal{L}^{-1}$.`,
    },
    {
      id: "fc-51",
      unit: U4,
      tier: "core",
      front: "First shifting theorem",
      back: m`$\mathcal{L}\{e^{at}f(t)\} = F(s-a)$: find $F(s)$, then replace $s$ by $s-a$. Inverse: $\mathcal{L}^{-1}\{F(s-a)\} = e^{at}f(t)$.`,
    },
    {
      id: "fc-52",
      unit: U4,
      tier: "core",
      front: "Laplace transform of derivatives",
      back: m`$\mathcal{L}\{y'\} = sY - y(0)$; $\mathcal{L}\{y''\} = s^2Y - sy(0) - y'(0)$`,
    },
    {
      id: "fc-53",
      unit: U4,
      tier: "core",
      front: m`Multiplication by $t$`,
      back: m`$\mathcal{L}\{t\,f(t)\} = -\frac{d}{ds}F(s)$; in general, $\mathcal{L}\{t^n f(t)\} = (-1)^n\frac{d^n}{ds^n}F(s)$`,
    },
    {
      id: "fc-54",
      unit: U4,
      tier: "hedge",
      front: m`Division by $t$ and Laplace of an integral`,
      back: m`$\mathcal{L}\left\{\frac{f(t)}{t}\right\} = \int_s^\infty F(u)\,du$; $\mathcal{L}\left\{\int_0^t f(u)\,du\right\} = \frac{F(s)}{s}$`,
    },
    {
      id: "fc-55",
      unit: U4,
      tier: "hedge",
      front: "Change of scale property",
      back: m`$\mathcal{L}\{f(at)\} = \frac{1}{a}F\left(\frac{s}{a}\right)$`,
    },
    {
      id: "fc-56",
      unit: U4,
      tier: "hedge",
      front: "Second shifting theorem (unit step)",
      back: m`$\mathcal{L}\{u(t-a)\,f(t-a)\} = e^{-as}F(s)$, where $u(t-a)$ is the unit step function that switches on at $t = a$.`,
    },
    {
      id: "fc-57",
      unit: U4,
      tier: "core",
      front: "How to find an inverse Laplace transform",
      back: m`(1) Split $F(s)$ into partial fractions. (2) For a quadratic denominator, complete the square: $s^2+bs+c = (s+\frac{b}{2})^2 + k^2$. (3) Match each term to the table, using the shifting theorem.`,
    },
    {
      id: "fc-58",
      unit: U4,
      tier: "core",
      front: "Steps for solving an ODE using the Laplace transform",
      back: m`(1) Take $\mathcal{L}$ of both sides. (2) Substitute the initial conditions $y(0), y'(0)$. (3) Solve algebraically for $Y(s)$. (4) Use partial fractions. (5) Take $\mathcal{L}^{-1}$ to get $y(t)$. (6) Check the initial conditions.`,
    },

    // Unit 5: Fourier Series
    {
      id: "fc-59",
      unit: U5,
      tier: "core",
      front: "What is a periodic function?",
      back: m`$f(x + T) = f(x)$ for all $x$, where the smallest such $T>0$ is the period. $\sin x$ and $\cos x$ have period $2\pi$; $\sin nx$ has period $\frac{2\pi}{n}$; $\tan x$ has period $\pi$.`,
    },
    {
      id: "fc-60",
      unit: U5,
      tier: "core",
      front: m`Fourier series of $f(x)$ in $(-\pi, \pi)$`,
      back: m`$f(x) = \frac{a_0}{2} + \sum_{n=1}^{\infty}\left(a_n\cos nx + b_n\sin nx\right)$`,
    },
    {
      id: "fc-61",
      unit: U5,
      tier: "core",
      front: m`Euler's formulas for the coefficients in $(-\pi, \pi)$`,
      back: m`$a_0 = \frac{1}{\pi}\int_{-\pi}^{\pi}f(x)\,dx$; $a_n = \frac{1}{\pi}\int_{-\pi}^{\pi}f(x)\cos nx\,dx$; $b_n = \frac{1}{\pi}\int_{-\pi}^{\pi}f(x)\sin nx\,dx$`,
    },
    {
      id: "fc-62",
      unit: U5,
      tier: "core",
      front: m`Fourier coefficients in $(0, 2\pi)$`,
      back: m`The formulas are the same as for $(-\pi,\pi)$, but the limits change to $0$ and $2\pi$: $a_n = \frac{1}{\pi}\int_0^{2\pi}f(x)\cos nx\,dx$, etc.`,
    },
    {
      id: "fc-63",
      unit: U5,
      tier: "core",
      front: m`Fourier series in $(-\ell, \ell)$`,
      back: m`$f(x) = \frac{a_0}{2} + \sum\left(a_n\cos\frac{n\pi x}{\ell} + b_n\sin\frac{n\pi x}{\ell}\right)$ with $a_n = \frac{1}{\ell}\int_{-\ell}^{\ell}f\cos\frac{n\pi x}{\ell}dx$ and $b_n = \frac{1}{\ell}\int_{-\ell}^{\ell}f\sin\frac{n\pi x}{\ell}dx$`,
    },
    {
      id: "fc-64",
      unit: U5,
      tier: "core",
      front: "Even and odd functions in Fourier series",
      back: m`Even $f(-x) = f(x)$: $b_n = 0$, giving a cosine series with $a_n = \frac{2}{\pi}\int_0^\pi f\cos nx\,dx$. Odd $f(-x) = -f(x)$: $a_0 = a_n = 0$, giving a sine series with $b_n = \frac{2}{\pi}\int_0^\pi f\sin nx\,dx$.`,
    },
    {
      id: "fc-65",
      unit: U5,
      tier: "core",
      front: "Values that appear in every Fourier problem",
      back: m`$\sin n\pi = 0$; $\cos n\pi = (-1)^n$; $\cos 2n\pi = 1$; $\sin\frac{n\pi}{2}$ cycles $1, 0, -1, 0$`,
    },
    {
      id: "fc-66",
      unit: U5,
      tier: "hedge",
      front: "Half-range series",
      back: m`$f$ is given only on $(0, \pi)$. Half-range cosine series (even extension): $a_n = \frac{2}{\pi}\int_0^\pi f\cos nx\,dx$. Half-range sine series (odd extension): $b_n = \frac{2}{\pi}\int_0^\pi f\sin nx\,dx$.`,
    },
    {
      id: "fc-67",
      unit: U5,
      tier: "hedge",
      front: "Parseval's formula",
      back: m`$\frac{1}{\pi}\int_{-\pi}^{\pi}[f(x)]^2dx = \frac{a_0^2}{2} + \sum_{n=1}^{\infty}(a_n^2 + b_n^2)$. It is used to find sums like $\sum \frac{1}{n^2} = \frac{\pi^2}{6}$.`,
    },
    {
      id: "fc-68",
      unit: U5,
      tier: "hedge",
      front: "Complex form of the Fourier series",
      back: m`$f(x) = \sum_{n=-\infty}^{\infty}c_n e^{inx}$ with $c_n = \frac{1}{2\pi}\int_{-\pi}^{\pi}f(x)e^{-inx}dx$`,
    },
    {
      id: "fc-69",
      unit: U5,
      tier: "hedge",
      front: "Dirichlet conditions, and the value at a discontinuity",
      back: m`$f$ must be single-valued, periodic, with finitely many finite discontinuities and finitely many maxima/minima in a period. At a jump, the series converges to the average $\frac{f(x^-) + f(x^+)}{2}$.`,
    },
    {
      id: "fc-70",
      unit: U5,
      tier: "core",
      front: m`Fourier series of $f(x) = x$ in $(-\pi, \pi)$`,
      back: m`$f$ is odd, so $a_0 = a_n = 0$ and $b_n = \frac{2(-1)^{n+1}}{n}$. This gives $x = 2\left(\sin x - \frac{\sin 2x}{2} + \frac{\sin 3x}{3} - \dots\right)$. At $x = \frac{\pi}{2}$: $\frac{\pi}{4} = 1 - \frac{1}{3} + \frac{1}{5} - \dots$`,
    },
  ],

  cheatSheet: {
    gradingNote:
      "Math is marked per step, not per word. Every correct line of working earns partial marks even if the final answer is wrong, so NEVER jump to the answer. 1) Write the formula or theorem you are using first. 2) Substitute the given values on a separate line. 3) Show every row operation, differentiation or integration step, and name it (e.g. R₂ → R₂ − 2R₁, 'by parts', 'by first shifting theorem'). 4) Box the final answer. 5) Where possible, add a one-line check or interpretation (sum of eigenvalues = trace, initial conditions satisfied, series converges to …).",
    sections: [
      {
        heading: "Unit 1 — Matrices",
        tier: "core",
        items: [
          m`$A^{-1} = \frac{\operatorname{adj}A}{|A|}$, $|A| \neq 0$`,
          m`Gauss-Jordan: $[A \mid I] \to [I \mid A^{-1}]$`,
          m`Gauss elimination: $[A|B]$ → upper triangular → back-substitute`,
          m`Rank $\rho(A)$ = number of non-zero rows in echelon form`,
          m`$\rho(A)=\rho(A|B)=n$ → unique; $<n$ → infinitely many; $\neq$ → none`,
          m`$|A - \lambda I| = 0$ → eigenvalues`,
          m`3×3: $\lambda^3 - S_1\lambda^2 + S_2\lambda - |A| = 0$`,
          m`$\sum\lambda = \operatorname{tr}A$, $\prod\lambda = |A|$`,
          m`Eigenvector: $(A-\lambda I)X = 0$, cross-multiply two rows`,
        ],
      },
      {
        heading: "Unit 2 — Derivatives",
        tier: "core",
        items: [
          m`$(uv)' = u'v + uv'$; $\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}$`,
          m`Chain: $\frac{dy}{dx} = \frac{dy}{du}\frac{du}{dx}$`,
          m`$\tan x \to \sec^2x$, $\sec x \to \sec x\tan x$`,
          m`$a^x \to a^x\ln a$, $\log_a x \to \frac{1}{x\ln a}$`,
          m`$\sin^{-1}x \to \frac{1}{\sqrt{1-x^2}}$, $\tan^{-1}x \to \frac{1}{1+x^2}$`,
          m`$\sinh x \to \cosh x$, $\cosh x \to \sinh x$`,
          m`$y = u^v$: take $\ln$ both sides first`,
          m`L'Hôpital: $\frac{0}{0}, \frac{\infty}{\infty}$ → $\frac{f'}{g'}$ (not quotient rule)`,
          m`$1^\infty, 0^0, \infty^0$ → $\ln y$, answer $e^L$`,
        ],
      },
      {
        heading: "Unit 3 — Integration",
        tier: "core",
        items: [
          m`$\int x^n = \frac{x^{n+1}}{n+1}$, $\int\frac{1}{x} = \ln|x|$`,
          m`$\int\frac{dx}{x^2+a^2} = \frac{1}{a}\tan^{-1}\frac{x}{a}$`,
          m`$\int\frac{dx}{\sqrt{a^2-x^2}} = \sin^{-1}\frac{x}{a}$`,
          m`$\int\frac{dx}{x^2-a^2} = \frac{1}{2a}\ln\left|\frac{x-a}{x+a}\right|$`,
          m`By parts: $\int u\,dv = uv - \int v\,du$ (ILATE)`,
          m`$\sqrt{a^2-x^2}$: $x=a\sin\theta$; $\sqrt{a^2+x^2}$: $x=a\tan\theta$`,
          m`Partial fractions: cover-up rule for linear factors`,
          m`Odd $f$: $\int_{-a}^a f = 0$; even: $2\int_0^a f$`,
        ],
      },
      {
        heading: "Unit 4 — Laplace",
        tier: "core",
        items: [
          m`$\mathcal{L}\{f\} = \int_0^\infty e^{-st}f(t)\,dt$`,
          m`$\mathcal{L}\{1\} = \frac{1}{s}$, $\mathcal{L}\{t^n\} = \frac{n!}{s^{n+1}}$, $\mathcal{L}\{e^{at}\} = \frac{1}{s-a}$`,
          m`$\mathcal{L}\{\sin at\} = \frac{a}{s^2+a^2}$, $\mathcal{L}\{\cos at\} = \frac{s}{s^2+a^2}$`,
          m`$\mathcal{L}\{\sinh at\} = \frac{a}{s^2-a^2}$, $\mathcal{L}\{\cosh at\} = \frac{s}{s^2-a^2}$`,
          m`Shift: $\mathcal{L}\{e^{at}f\} = F(s-a)$`,
          m`$\mathcal{L}\{tf\} = -F'(s)$`,
          m`$\mathcal{L}\{y'\} = sY - y(0)$`,
          m`$\mathcal{L}\{y''\} = s^2Y - sy(0) - y'(0)$`,
          m`Inverse: partial fractions + complete the square`,
        ],
      },
      {
        heading: "Unit 5 — Fourier",
        tier: "core",
        items: [
          m`$f = \frac{a_0}{2} + \sum(a_n\cos nx + b_n\sin nx)$`,
          m`$a_0 = \frac{1}{\pi}\int_{-\pi}^{\pi}f$, $a_n = \frac{1}{\pi}\int f\cos nx$, $b_n = \frac{1}{\pi}\int f\sin nx$`,
          m`$(0,2\pi)$: same formulas, limits $0 \to 2\pi$`,
          m`$(-\ell,\ell)$: replace $nx$ by $\frac{n\pi x}{\ell}$, $\frac{1}{\pi}$ by $\frac{1}{\ell}$`,
          m`Even $f$: $b_n = 0$; odd $f$: $a_0 = a_n = 0$`,
          m`$\cos n\pi = (-1)^n$, $\sin n\pi = 0$`,
          m`At a jump: series $= \frac{f(x^-)+f(x^+)}{2}$`,
        ],
      },
      {
        heading: "Hedge — less tested",
        tier: "hedge",
        items: [
          m`Independent vectors: $\det \neq 0$`,
          m`Linear map: $T(u+v)=Tu+Tv$, $T(cu)=cTu$`,
          m`Arc length $\int\sqrt{1+y'^2}\,dx$`,
          m`Volume $\pi\int y^2dx$; surface $2\pi\int y\sqrt{1+y'^2}\,dx$`,
          m`Average value $\frac{1}{b-a}\int_a^b f$`,
          m`$\int_1^\infty x^{-p}dx$ converges iff $p>1$`,
          m`$\mathcal{L}\{f/t\} = \int_s^\infty F$, $\mathcal{L}\{f(at)\} = \frac{1}{a}F(\frac{s}{a})$`,
          m`Parseval: $\frac{1}{\pi}\int f^2 = \frac{a_0^2}{2} + \sum(a_n^2+b_n^2)$`,
          m`Complex: $c_n = \frac{1}{2\pi}\int_{-\pi}^{\pi}fe^{-inx}dx$`,
        ],
      },
    ],
  },

  diagrams: [
    {
      id: "dg-volume",
      title: "Volume of revolution: y = x² about the x-axis",
      scenario:
        "The shaded region under y = x² from x = 0 to x = 2 is rotated about the x-axis. Each thin vertical strip becomes a disc of radius y and thickness dx, so V = π∫₀² y² dx = π∫₀² x⁴ dx = 32π/5 cubic units.",
      svg: "<svg viewBox='0 0 260 285' font-family='sans-serif'><line x1='20' y1='150' x2='190' y2='150' stroke='currentColor'/><line x1='30' y1='280' x2='30' y2='15' stroke='currentColor'/><text x='193' y='154' font-size='10' fill='currentColor'>x</text><text x='26' y='12' font-size='10' fill='currentColor'>y</text><path d='M30,150 Q80,150 130,30 L130,150 Z' fill='currentColor' fill-opacity='0.12' stroke='none'/><path d='M30,150 Q80,150 130,30' fill='none' stroke='currentColor' stroke-width='2'/><path d='M30,150 Q80,150 130,270' fill='none' stroke='currentColor' stroke-dasharray='4,3'/><ellipse cx='130' cy='150' rx='10' ry='120' fill='none' stroke='currentColor' stroke-dasharray='3,3'/><ellipse cx='105' cy='150' rx='6' ry='67.5' fill='none' stroke='currentColor' stroke-opacity='0.7'/><rect x='102' y='82.5' width='6' height='67.5' fill='currentColor' fill-opacity='0.35' stroke='currentColor'/><line x1='64' y1='112' x2='100' y2='112' stroke='currentColor'/><text x='38' y='115' font-size='9' fill='currentColor'>r = y</text><text x='99' y='230' font-size='9' fill='currentColor'>disc</text><text x='96' y='163' font-size='9' fill='currentColor'>dx</text><text x='144' y='165' font-size='9' fill='currentColor'>x = 2</text><text x='60' y='60' font-size='10' fill='currentColor'>y = x²</text><text x='150' y='40' font-size='10' fill='currentColor'>V = π∫ y² dx</text><text x='150' y='56' font-size='10' fill='currentColor'>= 32π/5</text><text x='150' y='250' font-size='9' fill='currentColor'>dashed = the solid</text><text x='150' y='262' font-size='9' fill='currentColor'>after rotation</text></svg>",
      mistakes: [
        { text: "Forgetting the π in front: V = π∫y² dx. Without π you have computed something else entirely." },
        { text: "Integrating y instead of y². ∫y dx is the AREA of the region, not the volume of the solid." },
        { text: "Rotating about the y-axis but still integrating in x. About the y-axis use V = π∫x² dy with y-limits." },
      ],
    },
    {
      id: "dg-square-wave",
      title: "Square wave: f(x) = −1 on (−π, 0), +1 on (0, π), period 2π",
      scenario:
        "A classic Fourier series question. The graph is symmetric about the origin, so f is ODD: a₀ = aₙ = 0 and only bₙ survive. bₙ = (2/π)∫ sin nx dx (from 0 to π) = 2(1 − (−1)ⁿ)/(nπ), which is 4/(nπ) for odd n and 0 for even n, so f(x) = (4/π)(sin x + sin 3x/3 + sin 5x/5 + …).",
      svg: "<svg viewBox='0 0 260 150' font-family='sans-serif'><line x1='15' y1='70' x2='250' y2='70' stroke='currentColor'/><line x1='130' y1='20' x2='130' y2='125' stroke='currentColor'/><text x='252' y='74' font-size='10' fill='currentColor'>x</text><line x1='30' y1='40' x2='80' y2='40' stroke='currentColor' stroke-width='2'/><line x1='80' y1='100' x2='130' y2='100' stroke='currentColor' stroke-width='2'/><line x1='130' y1='40' x2='180' y2='40' stroke='currentColor' stroke-width='2'/><line x1='180' y1='100' x2='230' y2='100' stroke='currentColor' stroke-width='2'/><line x1='80' y1='40' x2='80' y2='100' stroke='currentColor' stroke-dasharray='3,3'/><line x1='180' y1='40' x2='180' y2='100' stroke='currentColor' stroke-dasharray='3,3'/><line x1='230' y1='40' x2='230' y2='100' stroke='currentColor' stroke-dasharray='3,3'/><circle cx='80' cy='70' r='2.5' fill='currentColor'/><circle cx='130' cy='70' r='2.5' fill='currentColor'/><circle cx='180' cy='70' r='2.5' fill='currentColor'/><circle cx='230' cy='70' r='2.5' fill='currentColor'/><text x='76' y='84' font-size='9' fill='currentColor'>−π</text><text x='176' y='84' font-size='9' fill='currentColor'>π</text><text x='224' y='84' font-size='9' fill='currentColor'>2π</text><text x='22' y='84' font-size='9' fill='currentColor'>−2π</text><text x='134' y='36' font-size='9' fill='currentColor'>+1</text><text x='134' y='112' font-size='9' fill='currentColor'>−1</text><text x='40' y='140' font-size='9' fill='currentColor'>dots = value of the series at jumps (average = 0)</text></svg>",
      mistakes: [
        { text: "Computing a₀ and aₙ the long way. Spot the symmetry first: an odd function means a₀ = aₙ = 0, which saves half the time." },
        { text: "Writing cos nπ = −1 for all n. It is (−1)ⁿ, which is exactly why bₙ = 0 for even n here." },
        { text: "Saying the series equals 1 (or −1) at x = 0. At a jump the series converges to the average (−1 + 1)/2 = 0, by the Dirichlet conditions." },
      ],
    },
  ],

  mockPaper: {
    title: "Mathematics (PCA104) — Mock Paper",
    instructions:
      "Full marks: 80. Time: 3 hours. Group A: attempt both questions (2 × 12 = 24). Group B: attempt any SEVEN of the eight questions (7 × 8 = 56). The mark structure mirrors the other PGDCA papers and will be adjusted once real PCA104 past papers are available. Show every step: marks are awarded for working, not just the final answer.",
    questions: [
      {
        id: "mp-a1",
        group: "A",
        marks: 12,
        prompt: m`Find the eigenvalues and the corresponding eigenvectors of the matrix $A = \begin{bmatrix} 1 & 1 & 3 \\ 1 & 5 & 1 \\ 3 & 1 & 1 \end{bmatrix}$.`,
        answer: m`**Given:**

$$A = \begin{bmatrix} 1 & 1 & 3 \\ 1 & 5 & 1 \\ 3 & 1 & 1 \end{bmatrix}$$

**Step 1 — Characteristic equation.** The eigenvalues satisfy $|A - \lambda I| = 0$. For a 3×3 matrix this is

$$\lambda^3 - S_1\lambda^2 + S_2\lambda - |A| = 0$$

- $S_1 = \operatorname{tr}A = 1 + 5 + 1 = 7$
- $S_2 = $ sum of the principal minors $= (5\cdot1 - 1\cdot1) + (1\cdot1 - 3\cdot3) + (1\cdot5 - 1\cdot1) = 4 - 8 + 4 = 0$
- $|A| = 1(5 - 1) - 1(1 - 3) + 3(1 - 15) = 4 + 2 - 42 = -36$

$$\therefore\ \lambda^3 - 7\lambda^2 + 0\cdot\lambda + 36 = 0$$

**Step 2 — Solve the cubic.** Try $\lambda = -2$: $(-2)^3 - 7(-2)^2 + 36 = -8 - 28 + 36 = 0$ ✓, so $(\lambda + 2)$ is a factor. Dividing:

$$\lambda^3 - 7\lambda^2 + 36 = (\lambda + 2)(\lambda^2 - 9\lambda + 18) = (\lambda + 2)(\lambda - 3)(\lambda - 6)$$

$$\boxed{\lambda = -2,\ 3,\ 6}$$

*Check:* $-2 + 3 + 6 = 7 = \operatorname{tr}A$ ✓ and $(-2)(3)(6) = -36 = |A|$ ✓

**Step 3 — Eigenvector for $\lambda = -2$.** Solve $(A + 2I)X = 0$:

$$\begin{bmatrix} 3 & 1 & 3 \\ 1 & 7 & 1 \\ 3 & 1 & 3 \end{bmatrix}\begin{bmatrix} x \\ y \\ z \end{bmatrix} = 0$$

Rows 1 and 3 are identical, so cross-multiply rows 1 and 2:

$$\frac{x}{1\cdot1 - 7\cdot3} = \frac{y}{3\cdot1 - 1\cdot3} = \frac{z}{3\cdot7 - 1\cdot1} \Rightarrow \frac{x}{-20} = \frac{y}{0} = \frac{z}{20}$$

$$X_1 = \begin{bmatrix} -1 \\ 0 \\ 1 \end{bmatrix}$$

**Step 4 — Eigenvector for $\lambda = 3$.** Solve $(A - 3I)X = 0$:

$$\begin{bmatrix} -2 & 1 & 3 \\ 1 & 2 & 1 \\ 3 & 1 & -2 \end{bmatrix}\begin{bmatrix} x \\ y \\ z \end{bmatrix} = 0$$

Cross-multiply rows 1 and 2:

$$\frac{x}{1\cdot1 - 2\cdot3} = \frac{y}{3\cdot1 - 1\cdot(-2)} = \frac{z}{(-2)\cdot2 - 1\cdot1} \Rightarrow \frac{x}{-5} = \frac{y}{5} = \frac{z}{-5}$$

$$X_2 = \begin{bmatrix} 1 \\ -1 \\ 1 \end{bmatrix}$$

**Step 5 — Eigenvector for $\lambda = 6$.** Solve $(A - 6I)X = 0$:

$$\begin{bmatrix} -5 & 1 & 3 \\ 1 & -1 & 1 \\ 3 & 1 & -5 \end{bmatrix}\begin{bmatrix} x \\ y \\ z \end{bmatrix} = 0$$

Cross-multiply rows 1 and 2:

$$\frac{x}{1\cdot1 - (-1)\cdot3} = \frac{y}{3\cdot1 - 1\cdot(-5)} = \frac{z}{(-5)(-1) - 1\cdot1} \Rightarrow \frac{x}{4} = \frac{y}{8} = \frac{z}{4}$$

$$X_3 = \begin{bmatrix} 1 \\ 2 \\ 1 \end{bmatrix}$$

**Step 6 — Verify one eigenvector.** $AX_3 = \begin{bmatrix} 1+2+3 \\ 1+10+1 \\ 3+2+1 \end{bmatrix} = \begin{bmatrix} 6 \\ 12 \\ 6 \end{bmatrix} = 6X_3$ ✓

**Result:**

- $\lambda = -2$: eigenvector $k_1(-1, 0, 1)^T$
- $\lambda = 3$: eigenvector $k_2(1, -1, 1)^T$
- $\lambda = 6$: eigenvector $k_3(1, 2, 1)^T$

($k_i \neq 0$.) Since the three eigenvalues are distinct, the eigenvectors are linearly independent, so $A$ is diagonalisable.`,
      },
      {
        id: "mp-a2",
        group: "A",
        marks: 12,
        prompt: m`(a) Find $\mathcal{L}\{e^{-2t}\cos 3t\}$ and $\mathcal{L}^{-1}\left\{\dfrac{s+3}{s^2+4s+13}\right\}$. [4]  (b) Using the Laplace transform, solve $y'' + 4y' + 3y = e^{-2t}$, given $y(0) = 1,\ y'(0) = 0$. [8]`,
        answer: m`**(a) Part 1.** We know $\mathcal{L}\{\cos 3t\} = \dfrac{s}{s^2 + 9}$.

By the first shifting theorem, $\mathcal{L}\{e^{at}f(t)\} = F(s - a)$ with $a = -2$, so replace $s$ by $s + 2$:

$$\mathcal{L}\{e^{-2t}\cos 3t\} = \frac{s+2}{(s+2)^2 + 9} = \boxed{\frac{s+2}{s^2 + 4s + 13}}$$

**(a) Part 2.** Complete the square in the denominator: $s^2 + 4s + 13 = (s+2)^2 + 9$. Split the numerator to match: $s + 3 = (s + 2) + 1$.

$$\frac{s+3}{s^2+4s+13} = \frac{s+2}{(s+2)^2 + 3^2} + \frac{1}{3}\cdot\frac{3}{(s+2)^2 + 3^2}$$

Using $\mathcal{L}^{-1}\left\{\frac{s}{s^2+9}\right\} = \cos 3t$, $\mathcal{L}^{-1}\left\{\frac{3}{s^2+9}\right\} = \sin 3t$, and the shifting theorem:

$$\mathcal{L}^{-1}\left\{\frac{s+3}{s^2+4s+13}\right\} = \boxed{e^{-2t}\left(\cos 3t + \tfrac{1}{3}\sin 3t\right)}$$

**(b) Step 1 — Take the Laplace transform of both sides.** Let $\mathcal{L}\{y\} = Y(s)$ and use

$\mathcal{L}\{y''\} = s^2Y - sy(0) - y'(0)$, $\mathcal{L}\{y'\} = sY - y(0)$, $\mathcal{L}\{e^{-2t}\} = \frac{1}{s+2}$

$$[s^2Y - sy(0) - y'(0)] + 4[sY - y(0)] + 3Y = \frac{1}{s+2}$$

**Step 2 — Substitute $y(0) = 1,\ y'(0) = 0$.**

$$s^2Y - s + 4sY - 4 + 3Y = \frac{1}{s+2}$$

**Step 3 — Solve for $Y$.**

$$(s^2 + 4s + 3)\,Y = s + 4 + \frac{1}{s+2} = \frac{(s+4)(s+2) + 1}{s+2} = \frac{s^2 + 6s + 9}{s+2} = \frac{(s+3)^2}{s+2}$$

Since $s^2 + 4s + 3 = (s+1)(s+3)$:

$$Y = \frac{(s+3)^2}{(s+1)(s+2)(s+3)} = \frac{s+3}{(s+1)(s+2)}$$

**Step 4 — Partial fractions.** Let $\dfrac{s+3}{(s+1)(s+2)} = \dfrac{A}{s+1} + \dfrac{B}{s+2}$, so $s + 3 = A(s+2) + B(s+1)$.

- Put $s = -1$: $2 = A(1) \Rightarrow A = 2$
- Put $s = -2$: $1 = B(-1) \Rightarrow B = -1$

$$Y = \frac{2}{s+1} - \frac{1}{s+2}$$

**Step 5 — Take the inverse Laplace transform.** Using $\mathcal{L}^{-1}\left\{\frac{1}{s-a}\right\} = e^{at}$:

$$\boxed{y(t) = 2e^{-t} - e^{-2t}}$$

**Step 6 — Verification.**

- $y(0) = 2 - 1 = 1$ ✓
- $y'(t) = -2e^{-t} + 2e^{-2t}$, so $y'(0) = -2 + 2 = 0$ ✓
- $y''(t) = 2e^{-t} - 4e^{-2t}$
- $y'' + 4y' + 3y = (2 - 8 + 6)e^{-t} + (-4 + 8 - 3)e^{-2t} = e^{-2t}$ ✓

So $y(t) = 2e^{-t} - e^{-2t}$ satisfies both the equation and the initial conditions.`,
      },
      {
        id: "mp-b1",
        group: "B",
        marks: 8,
        prompt: m`Solve the following system by the Gauss elimination method: $x + y + z = 6,\ \ 2x + 3y + 4z = 20,\ \ 3x + 2y + 5z = 22$.`,
        answer: m`**Step 1 — Augmented matrix $[A \mid B]$.**

$$\left[\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\ 2 & 3 & 4 & 20 \\ 3 & 2 & 5 & 22 \end{array}\right]$$

**Step 2 — Eliminate $x$ from rows 2 and 3.** $R_2 \to R_2 - 2R_1$, $R_3 \to R_3 - 3R_1$:

$$\left[\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\ 0 & 1 & 2 & 8 \\ 0 & -1 & 2 & 4 \end{array}\right]$$

**Step 3 — Eliminate $y$ from row 3.** $R_3 \to R_3 + R_2$:

$$\left[\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\ 0 & 1 & 2 & 8 \\ 0 & 0 & 4 & 12 \end{array}\right]$$

The matrix is now upper triangular. Here $\rho(A) = \rho(A|B) = 3 =$ the number of unknowns, so the solution is unique.

**Step 4 — Back substitution.**

- From $R_3$: $4z = 12 \Rightarrow z = 3$
- From $R_2$: $y + 2z = 8 \Rightarrow y = 8 - 6 = 2$
- From $R_1$: $x + y + z = 6 \Rightarrow x = 6 - 2 - 3 = 1$

$$\boxed{x = 1,\ y = 2,\ z = 3}$$

**Step 5 — Check in the original equations.** $1 + 2 + 3 = 6$ ✓; $2 + 6 + 12 = 20$ ✓; $3 + 4 + 15 = 22$ ✓`,
      },
      {
        id: "mp-b2",
        group: "B",
        marks: 8,
        prompt: m`Find the inverse of $A = \begin{bmatrix} 1 & 2 & 3 \\ 0 & 1 & 4 \\ 5 & 6 & 0 \end{bmatrix}$ using the Gauss-Jordan method.`,
        answer: m`**Step 0 — Check that the inverse exists.** $|A| = 1(0 - 24) - 2(0 - 20) + 3(0 - 5) = -24 + 40 - 15 = 1 \neq 0$, so $A^{-1}$ exists.

**Step 1 — Write $[A \mid I]$.**

$$\left[\begin{array}{ccc|ccc} 1 & 2 & 3 & 1 & 0 & 0 \\ 0 & 1 & 4 & 0 & 1 & 0 \\ 5 & 6 & 0 & 0 & 0 & 1 \end{array}\right]$$

**Step 2 —** $R_3 \to R_3 - 5R_1$:

$$\left[\begin{array}{ccc|ccc} 1 & 2 & 3 & 1 & 0 & 0 \\ 0 & 1 & 4 & 0 & 1 & 0 \\ 0 & -4 & -15 & -5 & 0 & 1 \end{array}\right]$$

**Step 3 —** $R_3 \to R_3 + 4R_2$:

$$\left[\begin{array}{ccc|ccc} 1 & 2 & 3 & 1 & 0 & 0 \\ 0 & 1 & 4 & 0 & 1 & 0 \\ 0 & 0 & 1 & -5 & 4 & 1 \end{array}\right]$$

**Step 4 —** $R_1 \to R_1 - 2R_2$:

$$\left[\begin{array}{ccc|ccc} 1 & 0 & -5 & 1 & -2 & 0 \\ 0 & 1 & 4 & 0 & 1 & 0 \\ 0 & 0 & 1 & -5 & 4 & 1 \end{array}\right]$$

**Step 5 —** $R_1 \to R_1 + 5R_3$, $R_2 \to R_2 - 4R_3$:

$$\left[\begin{array}{ccc|ccc} 1 & 0 & 0 & -24 & 18 & 5 \\ 0 & 1 & 0 & 20 & -15 & -4 \\ 0 & 0 & 1 & -5 & 4 & 1 \end{array}\right]$$

The left block is now $I$, so

$$\boxed{A^{-1} = \begin{bmatrix} -24 & 18 & 5 \\ 20 & -15 & -4 \\ -5 & 4 & 1 \end{bmatrix}}$$

**Step 6 — Verification (first row of $AA^{-1}$).** $1(-24) + 2(20) + 3(-5) = 1$, $1(18) + 2(-15) + 3(4) = 0$, $1(5) + 2(-4) + 3(1) = 0$ ✓. The remaining rows check the same way, so $AA^{-1} = I$.`,
      },
      {
        id: "mp-b3",
        group: "B",
        marks: 8,
        prompt: m`(a) Find the rank of $A = \begin{bmatrix} 1 & 2 & 3 & 0 \\ 2 & 4 & 3 & 2 \\ 3 & 2 & 1 & 3 \\ 6 & 8 & 7 & 5 \end{bmatrix}$. [5]  (b) Test whether the vectors $(1, 2, 3),\ (2, -1, 4),\ (3, 1, 7)$ are linearly dependent. [3]`,
        answer: m`**(a) Step 1 — Clear column 1.** $R_2 \to R_2 - 2R_1$, $R_3 \to R_3 - 3R_1$, $R_4 \to R_4 - 6R_1$:

$$\begin{bmatrix} 1 & 2 & 3 & 0 \\ 0 & 0 & -3 & 2 \\ 0 & -4 & -8 & 3 \\ 0 & -4 & -11 & 5 \end{bmatrix}$$

**Step 2 — Swap to bring a non-zero pivot up.** $R_2 \leftrightarrow R_3$:

$$\begin{bmatrix} 1 & 2 & 3 & 0 \\ 0 & -4 & -8 & 3 \\ 0 & 0 & -3 & 2 \\ 0 & -4 & -11 & 5 \end{bmatrix}$$

**Step 3 — Clear column 2.** $R_4 \to R_4 - R_2$:

$$\begin{bmatrix} 1 & 2 & 3 & 0 \\ 0 & -4 & -8 & 3 \\ 0 & 0 & -3 & 2 \\ 0 & 0 & -3 & 2 \end{bmatrix}$$

**Step 4 — Clear column 3.** $R_4 \to R_4 - R_3$:

$$\begin{bmatrix} 1 & 2 & 3 & 0 \\ 0 & -4 & -8 & 3 \\ 0 & 0 & -3 & 2 \\ 0 & 0 & 0 & 0 \end{bmatrix}$$

This is echelon form, with 3 non-zero rows.

$$\boxed{\rho(A) = 3}$$

(So $|A| = 0$: the rows of $A$ are linearly dependent.)

**(b) Step 1 — Form the determinant** with the vectors as rows:

$$D = \begin{vmatrix} 1 & 2 & 3 \\ 2 & -1 & 4 \\ 3 & 1 & 7 \end{vmatrix} = 1(-7 - 4) - 2(14 - 12) + 3(2 + 3) = -11 - 4 + 15 = 0$$

**Step 2 — Conclusion.** Since $D = 0$, the vectors are **linearly dependent**. The explicit relation is $(1,2,3) + (2,-1,4) = (3,1,7)$, i.e. $v_1 + v_2 - v_3 = 0$ with non-zero coefficients.`,
      },
      {
        id: "mp-b4",
        group: "B",
        marks: 8,
        prompt: m`(a) Differentiate $y = \tan^{-1}\left(\dfrac{2x}{1-x^2}\right)$ with respect to $x$. [4]  (b) Find $\dfrac{dy}{dx}$ if $y = x^{\sin x}$. [4]`,
        answer: m`**(a) Step 1 — Substitute.** Let $x = \tan\theta$, so $\theta = \tan^{-1}x$.

$$\frac{2x}{1 - x^2} = \frac{2\tan\theta}{1 - \tan^2\theta} = \tan 2\theta$$

**Step 2 — Simplify.**

$$y = \tan^{-1}(\tan 2\theta) = 2\theta = 2\tan^{-1}x \quad (|x| < 1)$$

**Step 3 — Differentiate.** Using $\frac{d}{dx}\tan^{-1}x = \frac{1}{1+x^2}$:

$$\boxed{\frac{dy}{dx} = \frac{2}{1 + x^2}}$$

(Differentiating directly with the chain and quotient rules gives the same result, but the substitution is shorter and less error-prone.)

**(b) Step 1 — Take logarithms.** The variable is in both the base and the exponent, so take $\ln$ of both sides:

$$\ln y = \sin x \cdot \ln x$$

**Step 2 — Differentiate both sides with respect to $x$** (product rule on the right):

$$\frac{1}{y}\frac{dy}{dx} = \cos x \cdot \ln x + \sin x \cdot \frac{1}{x}$$

**Step 3 — Multiply by $y = x^{\sin x}$.**

$$\boxed{\frac{dy}{dx} = x^{\sin x}\left(\cos x \ln x + \frac{\sin x}{x}\right)}$$`,
      },
      {
        id: "mp-b5",
        group: "B",
        marks: 8,
        prompt: m`Evaluate using L'Hôpital's rule: (a) $\displaystyle\lim_{x\to0}\frac{e^x - 1 - x}{x^2}$  (b) $\displaystyle\lim_{x\to0}\frac{x - \sin x}{x^3}$  (c) $\displaystyle\lim_{x\to0^+} x\ln x$`,
        answer: m`**L'Hôpital's rule:** if $\lim\frac{f(x)}{g(x)}$ has the form $\frac{0}{0}$ or $\frac{\infty}{\infty}$, then $\lim\frac{f(x)}{g(x)} = \lim\frac{f'(x)}{g'(x)}$.

**(a)** At $x = 0$: $\frac{1 - 1 - 0}{0} = \frac{0}{0}$, so the rule applies.

$$\lim_{x\to0}\frac{e^x - 1 - x}{x^2} = \lim_{x\to0}\frac{e^x - 1}{2x}\quad\left(\tfrac{0}{0}\text{ again}\right) = \lim_{x\to0}\frac{e^x}{2} = \boxed{\frac{1}{2}}$$

**(b)** At $x = 0$: $\frac{0 - 0}{0} = \frac{0}{0}$.

$$\lim_{x\to0}\frac{x - \sin x}{x^3} = \lim_{x\to0}\frac{1 - \cos x}{3x^2}\ \left(\tfrac{0}{0}\right) = \lim_{x\to0}\frac{\sin x}{6x}\ \left(\tfrac{0}{0}\right) = \lim_{x\to0}\frac{\cos x}{6} = \boxed{\frac{1}{6}}$$

**(c)** As $x \to 0^+$: $x \to 0$ and $\ln x \to -\infty$, giving the form $0\cdot(-\infty)$. Rewrite it as a fraction to get $\frac{\infty}{\infty}$:

$$\lim_{x\to0^+} x\ln x = \lim_{x\to0^+}\frac{\ln x}{1/x}\ \left(\tfrac{-\infty}{\infty}\right) = \lim_{x\to0^+}\frac{1/x}{-1/x^2} = \lim_{x\to0^+}(-x) = \boxed{0}$$

Note: in each step the numerator and denominator are differentiated **separately**. The quotient rule is not used.`,
      },
      {
        id: "mp-b6",
        group: "B",
        marks: 8,
        prompt: m`Evaluate: (a) $\displaystyle\int x^2 e^x\,dx$ [4]  (b) $\displaystyle\int\frac{2x + 3}{(x-1)(x+2)}\,dx$ [4]`,
        answer: m`**(a) Integration by parts:** $\int u\,dv = uv - \int v\,du$. By ILATE, take $u = x^2$ (algebraic) and $dv = e^x dx$ (exponential).

**Step 1.** $u = x^2,\ du = 2x\,dx,\ v = e^x$:

$$\int x^2e^x\,dx = x^2e^x - \int 2x\,e^x\,dx$$

**Step 2 — Apply by parts again** to $\int 2xe^x\,dx$ with $u = 2x,\ du = 2\,dx,\ v = e^x$:

$$\int 2xe^x\,dx = 2xe^x - \int 2e^x\,dx = 2xe^x - 2e^x$$

**Step 3 — Combine.**

$$\int x^2e^x\,dx = x^2e^x - 2xe^x + 2e^x + C = \boxed{e^x(x^2 - 2x + 2) + C}$$

*Check:* $\frac{d}{dx}[e^x(x^2 - 2x + 2)] = e^x(x^2 - 2x + 2) + e^x(2x - 2) = x^2e^x$ ✓

**(b) Step 1 — Partial fractions.** Let

$$\frac{2x+3}{(x-1)(x+2)} = \frac{A}{x-1} + \frac{B}{x+2} \Rightarrow 2x + 3 = A(x+2) + B(x-1)$$

- Put $x = 1$: $5 = 3A \Rightarrow A = \frac{5}{3}$
- Put $x = -2$: $-1 = -3B \Rightarrow B = \frac{1}{3}$

**Step 2 — Integrate term by term.**

$$\int\frac{2x+3}{(x-1)(x+2)}\,dx = \frac{5}{3}\int\frac{dx}{x-1} + \frac{1}{3}\int\frac{dx}{x+2}$$

$$= \boxed{\frac{5}{3}\ln|x - 1| + \frac{1}{3}\ln|x + 2| + C}$$`,
      },
      {
        id: "mp-b7",
        group: "B",
        marks: 8,
        prompt: m`(a) Find the volume of the solid generated by revolving the region bounded by $y = x^2$, the x-axis and the line $x = 2$ about the x-axis. [5]  (b) Evaluate the improper integral $\displaystyle\int_1^\infty\frac{dx}{x^2}$ and state whether it converges. [3]`,
        answer: m`**(a) Formula (disc method, about the x-axis):**

$$V = \pi\int_a^b y^2\,dx$$

**Step 1 — Limits and integrand.** The region runs from $x = 0$ (where the curve meets the x-axis) to $x = 2$, with $y = x^2$, so $y^2 = x^4$.

**Step 2 — Substitute.**

$$V = \pi\int_0^2 x^4\,dx = \pi\left[\frac{x^5}{5}\right]_0^2 = \pi\left(\frac{32}{5} - 0\right)$$

$$\boxed{V = \frac{32\pi}{5}\ \text{cubic units} \approx 20.11}$$

(See the Diagram Guide, "Volume of revolution", for the sketch: each strip of width $dx$ becomes a disc of radius $y$.)

**(b) Step 1 — Replace the infinite limit with a limit.**

$$\int_1^\infty\frac{dx}{x^2} = \lim_{b\to\infty}\int_1^b x^{-2}\,dx = \lim_{b\to\infty}\left[-\frac{1}{x}\right]_1^b$$

**Step 2 — Evaluate.**

$$= \lim_{b\to\infty}\left(-\frac{1}{b} + 1\right) = 0 + 1 = \boxed{1}$$

**Conclusion:** the limit is finite, so the improper integral **converges** to 1. This agrees with the rule that $\int_1^\infty\frac{dx}{x^p}$ converges when $p > 1$ (here $p = 2$).`,
      },
      {
        id: "mp-b8",
        group: "B",
        marks: 8,
        prompt: m`Find the Fourier series of $f(x) = x$ in the interval $(-\pi, \pi)$. Hence deduce that $\dfrac{\pi}{4} = 1 - \dfrac{1}{3} + \dfrac{1}{5} - \dfrac{1}{7} + \cdots$`,
        answer: m`**Fourier series in $(-\pi, \pi)$:**

$$f(x) = \frac{a_0}{2} + \sum_{n=1}^{\infty}(a_n\cos nx + b_n\sin nx)$$

**Step 1 — Check symmetry.** $f(-x) = -x = -f(x)$, so $f$ is **odd**. Hence $a_0 = 0$ and $a_n = 0$ (the integrand $x\cos nx$ is odd over a symmetric interval).

**Step 2 — Find $b_n$.** Since $x\sin nx$ is even:

$$b_n = \frac{1}{\pi}\int_{-\pi}^{\pi}x\sin nx\,dx = \frac{2}{\pi}\int_0^{\pi}x\sin nx\,dx$$

Integrate by parts with $u = x$, $dv = \sin nx\,dx$, $v = -\frac{\cos nx}{n}$:

$$\int_0^\pi x\sin nx\,dx = \left[-\frac{x\cos nx}{n}\right]_0^\pi + \frac{1}{n}\int_0^\pi\cos nx\,dx = -\frac{\pi\cos n\pi}{n} + \frac{1}{n}\left[\frac{\sin nx}{n}\right]_0^\pi$$

Since $\sin n\pi = 0$ and $\cos n\pi = (-1)^n$:

$$\int_0^\pi x\sin nx\,dx = -\frac{\pi(-1)^n}{n}$$

$$\therefore\ b_n = \frac{2}{\pi}\cdot\left(-\frac{\pi(-1)^n}{n}\right) = \frac{2(-1)^{n+1}}{n}$$

So $b_1 = 2,\ b_2 = -1,\ b_3 = \frac{2}{3},\ b_4 = -\frac{1}{2}, \dots$

**Step 3 — Write the series.**

$$\boxed{x = 2\left(\sin x - \frac{\sin 2x}{2} + \frac{\sin 3x}{3} - \frac{\sin 4x}{4} + \cdots\right)}, \quad -\pi < x < \pi$$

**Step 4 — Deduction.** Put $x = \frac{\pi}{2}$ (a point of continuity). Using $\sin\frac{\pi}{2} = 1,\ \sin\pi = 0,\ \sin\frac{3\pi}{2} = -1,\ \sin 2\pi = 0,\ \sin\frac{5\pi}{2} = 1, \dots$:

$$\frac{\pi}{2} = 2\left(1 - 0 - \frac{1}{3} - 0 + \frac{1}{5} - \cdots\right)$$

$$\therefore\ \boxed{\frac{\pi}{4} = 1 - \frac{1}{3} + \frac{1}{5} - \frac{1}{7} + \cdots}$$

This is the Gregory–Leibniz series, which follows directly from the Fourier series of $f(x) = x$.`,
      },
    ],
  },

  pastPapers: {
    years: [],
    questions: [],
  },

  glossary: [
    { term: "Matrix", definition: "A rectangular array of numbers arranged in m rows and n columns, called an m × n matrix." },
    { term: "Determinant", definition: m`A scalar value $|A|$ computed from a square matrix. It is zero exactly when the matrix has no inverse.` },
    { term: "Singular matrix", definition: m`A square matrix whose determinant is zero, $|A| = 0$. It has no inverse.` },
    { term: "Adjoint", definition: m`The transpose of the matrix of cofactors, written adj $A$. It is used in $A^{-1} = \frac{\operatorname{adj}A}{|A|}$.` },
    { term: "Cofactor", definition: m`$C_{ij} = (-1)^{i+j}M_{ij}$, where $M_{ij}$ is the minor obtained by deleting row $i$ and column $j$.` },
    { term: "Echelon form", definition: "A matrix form in which every leading non-zero entry sits to the right of the one above it and zero rows are at the bottom. It is used to find the rank." },
    { term: "Rank", definition: m`The number of non-zero rows in the echelon form of a matrix, written $\rho(A)$. It equals the order of the largest non-zero minor.` },
    { term: "Augmented matrix", definition: m`The coefficient matrix with the constant column attached, $[A \mid B]$. It is used in Gauss elimination.` },
    { term: "Eigenvalue", definition: m`A scalar $\lambda$ for which $AX = \lambda X$ has a non-zero solution $X$. It is a root of $|A - \lambda I| = 0$.` },
    { term: "Eigenvector", definition: m`A non-zero vector $X$ satisfying $AX = \lambda X$. Its direction is unchanged by the transformation $A$.` },
    { term: "Characteristic equation", definition: m`The polynomial equation $|A - \lambda I| = 0$ whose roots are the eigenvalues of $A$.` },
    { term: "Trace", definition: "The sum of the main-diagonal elements of a square matrix. It equals the sum of the eigenvalues." },
    { term: "Vector space", definition: "A set of vectors that is closed under addition and scalar multiplication and satisfies the vector-space axioms (zero vector, inverses, associativity, distributivity)." },
    { term: "Linearly dependent", definition: m`Describes vectors where at least one can be written as a combination of the others, i.e. $c_1v_1 + \dots + c_nv_n = 0$ with some $c_i \neq 0$.` },
    { term: "Linear transformation", definition: m`A mapping $T$ with $T(u+v) = T(u) + T(v)$ and $T(cu) = cT(u)$. It can be represented as $Y = AX$.` },
    { term: "Derivative", definition: m`The instantaneous rate of change of a function, $f'(x) = \lim_{h\to0}\frac{f(x+h)-f(x)}{h}$. Geometrically it is the slope of the tangent.` },
    { term: "Chain rule", definition: m`The rule for differentiating a composite function: $\frac{dy}{dx} = \frac{dy}{du}\cdot\frac{du}{dx}$.` },
    { term: "Indeterminate form", definition: m`A limit expression such as $\frac{0}{0}, \frac{\infty}{\infty}, 0\cdot\infty, \infty-\infty, 1^\infty, 0^0, \infty^0$ whose value cannot be read off directly.` },
    { term: "L'Hopital's rule", definition: m`For $\frac{0}{0}$ or $\frac{\infty}{\infty}$ forms, $\lim\frac{f}{g} = \lim\frac{f'}{g'}$, with the numerator and denominator differentiated separately.` },
    { term: "Hyperbolic function", definition: m`A function defined from exponentials, e.g. $\sinh x = \frac{e^x-e^{-x}}{2}$ and $\cosh x = \frac{e^x+e^{-x}}{2}$.` },
    { term: "Antiderivative", definition: m`A function $F$ with $F'(x) = f(x)$. The indefinite integral is $\int f\,dx = F(x) + C$.` },
    { term: "Definite integral", definition: m`$\int_a^b f(x)\,dx = F(b) - F(a)$: the net signed area under $f$ between $a$ and $b$.` },
    { term: "Integration by parts", definition: m`The technique $\int u\,dv = uv - \int v\,du$ for integrating products. The choice of $u$ follows the ILATE order.` },
    { term: "Partial fractions", definition: m`Splitting a rational function into simpler fractions such as $\frac{A}{x-a} + \frac{B}{x-b}$ so that each term can be integrated.` },
    { term: "Improper integral", definition: m`An integral with an infinite limit or an infinite discontinuity, evaluated as a limit. It converges if the limit is finite.` },
    { term: "Solid of revolution", definition: m`The 3-D solid formed by rotating a plane region about an axis. Its volume is $\pi\int y^2\,dx$ for rotation about the x-axis.` },
    { term: "Laplace transform", definition: m`$\mathcal{L}\{f(t)\} = F(s) = \int_0^\infty e^{-st}f(t)\,dt$. It converts a differential equation in $t$ into an algebraic equation in $s$.` },
    { term: "Inverse Laplace transform", definition: m`$\mathcal{L}^{-1}\{F(s)\} = f(t)$, the function whose Laplace transform is $F(s)$. It is usually found with partial fractions and tables.` },
    { term: "First shifting theorem", definition: m`$\mathcal{L}\{e^{at}f(t)\} = F(s - a)$: multiplying by $e^{at}$ shifts $s$ to $s - a$.` },
    { term: "Periodic function", definition: m`A function with $f(x + T) = f(x)$ for all $x$. The smallest positive $T$ is the period.` },
    { term: "Fourier series", definition: m`A representation of a periodic function as $\frac{a_0}{2} + \sum(a_n\cos nx + b_n\sin nx)$.` },
    { term: "Euler formulas", definition: m`The integrals that give the Fourier coefficients, e.g. $a_n = \frac{1}{\pi}\int_{-\pi}^{\pi}f(x)\cos nx\,dx$.` },
    { term: "Half-range series", definition: m`A Fourier sine or cosine series for a function defined only on $(0, \pi)$, built from its odd or even extension.` },
    { term: "Dirichlet conditions", definition: m`Sufficient conditions for a Fourier series to converge: finitely many discontinuities and extrema per period. At a jump, the series gives the average of the left and right values.` },
    { term: "Parseval's formula", definition: m`$\frac{1}{\pi}\int_{-\pi}^{\pi}f^2\,dx = \frac{a_0^2}{2} + \sum(a_n^2 + b_n^2)$. It links the energy of $f$ to its Fourier coefficients.` },
  ],

  syllabus: {
    units: [
      {
        unit: U1,
        topics: [
          "Matrix and Determinant",
          "Vector space (Introduction)",
          "Dependent and independent vectors",
          "Linear Transformation",
          "System of Linear equations (Gauss Elimination method)",
          "Inverse of matrix (Gauss Jordan method)",
          "Rank of the matrix",
          "Eigen values of matrix",
          "Eigen vectors and its applications",
        ],
      },
      {
        unit: U2,
        topics: [
          "Definition of derivatives",
          "Derivative Rules: Power, Sum, Product, Quotient, Chain rules",
          "Derivatives of Algebraic and Trigonometric functions",
          "Derivatives of Exponential and Logarithmic functions",
          "Derivatives of Inverse Trigonometric and Hyperbolic functions",
          "Evaluation of limits using L'Hôpital's Rule",
        ],
      },
      {
        unit: U3,
        topics: [
          "Indefinite and Definite integrals",
          "Integration Formulas, Substitutions, Trigonometric Substitutions",
          "Integration by parts",
          "Standard Integrals",
          "Use of partial fractions",
          "Evaluation of integrals using standard formulas",
          "Definite Integral and its evaluation",
          "Applications: length, surface area, volume and average value (common curves only)",
          "Evaluation of Improper integrals",
        ],
      },
      {
        unit: U4,
        topics: [
          "Introduction",
          "Laplace transform of some elementary functions",
          "Properties of Laplace transform",
          "Inverse Laplace transforms",
          "Application to differential equations",
        ],
      },
      {
        unit: U5,
        topics: [
          "Periodic function",
          "Trigonometric Series",
          "Fourier series",
          "Determination of Fourier coefficients: Euler Formula (−π, π)",
          "Fourier Series in the intervals (0, 2π) and (−ℓ, ℓ)",
          "Even and Odd functions and their Fourier series",
          "Fourier cosine and Sine Series; Half range function",
          "Parseval's formula",
          "Fourier series in complex form (Introduction)",
        ],
      },
    ],
  },
};
