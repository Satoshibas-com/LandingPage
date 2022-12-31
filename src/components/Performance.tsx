import styled from "styled-components";
import Section from "./Section";
import Terminal from "./Terminal";

const terminalContent: string[] = [
  "Executed block 9032056, Q1 2023 - AMM Pre-Allocation of SatoShibas",
  "Executed block 9036893, Q1 2023 - Staking DAPP SatoShibas",
  "Executed block 9042293, Q1 2023 - SatoShibas DEX launch",
  "Executed block 9047738, Q2 2023 - Multi-Chain SatoShibas",
  "Executed block 9052664, Q3 2023 - SatoShibas DAO ",
  "Executed block 9057169, Q3 2023 - DAO Nodes Initial Batch Offering",
  "Executed block 9067838, Q4 2023 - SatoShibas Network Consolidation",
  "Executed block 9072964, Q4 2023 - DAO Nodes 2nd Batch",
  "Executed block 9087169, Q4 2023 - DAO Nodes Initial Batch Offering",

];

const StyledPerformance = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8rem;
  font-size: 2rem;
  width: 100%;

  padding: 0 14rem;
  grid-gap: 9rem;
  @media (max-width: 1367px) {
    grid-template-columns: 1fr;
    padding: 0 10rem;
  }
  @media (max-width: 768px) {
    padding: 0 3rem;
  }
`;

const DescriptionSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 100rem;
  margin: 0 auto;
`;

const Description = styled.p`
  font-weight: 400;
  line-height: 1.4;

  font-size: 2.1rem;
  margin-top: 2rem;
  @media (max-width: 1367px) {
    font-size: 1.9rem;
  }
  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-top: 0;
    margin-bottom: 2rem;
  }
`;

const Highlight = styled(Description)`
  position: relative;
  font-weight: 600;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-size: 3.6rem;
  @media (max-width: 1367px) {
    font-size: 3rem;
    line-height: 1.2;
  }
  @media (max-width: 768px) {
    font-size: 2.4rem;
    line-height: 1.2;
  }
`;

const TerminalSection = styled.div`
  width: 100%;
  max-width: 70.2rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Performance = () => {
  return (
    <Section id="performance" header="Performance">
      <StyledPerformance>
        <DescriptionSection>
          <Description>
            SatoShibas leverages multiple innovations:
            preprocessing data outside storage engine,
            staged synchronization technique and
            a custom optimized EVM interpreter.
          </Description>
          <Highlight>
            All of this enables the new standard of performance, not seen in
            full nodes before.
          </Highlight>
          <Description>
            Check our road map for more details, the journey and the expansion of SatoShibas.
          </Description>
        </DescriptionSection>
        <TerminalSection>
          <Terminal small code={terminalContent} />
        </TerminalSection>
      </StyledPerformance>
    </Section>
  );
};

export default Performance;
