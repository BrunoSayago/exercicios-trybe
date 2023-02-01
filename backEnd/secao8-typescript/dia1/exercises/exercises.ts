// ./exercises.ts

export function getSquareArea(side: number): number {
    return side ** 2;
}

export function getRectangleArea(base: number, height: number): number {
    return base * height;
}

export function getTriangleArea(base: number, height: number): number {
    return (base * height) / 2;
}

export function getPolygonPerimeter(sides: number[]): number {
    return sides.reduce((acc, side) => acc + side, 0);
}

export function triangleCheck(
    sideA: number,
    sideB: number,
    sideC: number
  ): boolean {
    const checkSideA = (sideB - sideC) < sideA && sideA < (sideB + sideC);
    const checkSideB = (sideA - sideC) < sideB && sideB < (sideA + sideC);
    const checkSideC = (sideA - sideB) < sideC && sideC < (sideA + sideB);
    return checkSideA && checkSideB && checkSideC;
}

// Exercícios

export function areaLosango(
    diagonalA: number,
    diagonalB: number,
  ): number {
    return ((diagonalA * diagonalB) / 2);
}

export function areaTrapezio(
    baseA: number,
    baseB: number,
    altura: number,
  ): number {
    return (((baseA + baseB) * altura) / 2);
}

export function areaCirculo(
    raio: number,
  ): number {
    return ((raio ** 2) * Math.PI);
}
