import { PortfolioData } from '../types';
import portfolioData from '../data/portfolio-data.json';

export const usePortfolioData = (): PortfolioData => {
  return portfolioData as PortfolioData;
};
