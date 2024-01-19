import React from "react";
import styled from "styled-components";

const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  padding: 20px;
  width: 40vw;
`;

const NameContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const Frame = styled.div`
  align-items: center;
  border: 1px solid #e2e7f080;
  border-radius: 8px;
  display: flex;
  padding: 10px;
`;

const Logo = styled.img`
  height: 150px;
  object-fit: cover;
  width: 150px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TextWrapper = styled.div`
  font-family: ${(props) =>
    props.bold ? "Inter-Bold, Helvetica" : "Inter-Regular, Helvetica"};
  font-size: ${(props) => (props.size ? props.size : "16px")};
  
`;

const FriendContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const DivWrapper = styled.div`
  align-items: center;
  border: 1px solid #e2e7f0;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  padding: 10px 20px;
  transition: all 0.15s;
  cursor:pointer;
  &:hover {
    color:#1a1a1a;
    background-color: #e2e7f0;
  }
`;

const TopPlayedContainer = styled.div`
  width: 40vw;
  height: 630px;
  padding-top: 26px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 8px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 30px;
  display: inline-flex;
`;

const GameContainer = styled.div`
  width: 774px;
  padding-right: 5px;
  border-radius: 8px;
  border: 1px rgba(226, 231, 240, 0.50) solid;
  justify-content: space-between;
  align-items: center;
  display: inline-flex;
`;

const GameDetailsContainer = styled.div`
  height: 145px;
  padding-right: 10px;
  justify-content: space-between;
  align-items: flex-start;
  display: flex;
`;

const GameImage = styled.img`
  width: 258px;
  height: 145px;
  border-radius: 8px;
`;

const GameInfoContainer = styled.div`
  flex: 1 1 0;
  align-self: stretch;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  display: inline-flex;
`;

const GameTitle = styled.div`
  color: #e2e7f0;
  font-size: 26px;
  font-family: 'Inter';
  font-weight: 600;
  word-wrap: break-word;
`;

const GameOwnership = styled.div`
  color: #e2e7f0;
  font-size: 18px;
  font-family: 'Inter';
  font-weight: 400;
  word-wrap: break-word;
`;

const PlayTogetherButton = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 8px;
  border: 1px rgba(226, 231, 240, 0.50) solid;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  color: #e2e7f0;
  font-size: 18px;
  font-family: 'Inter';
  font-weight: 500;
  word-wrap: break-word;
  cursor:pointer;
  transition: all 0.15s;
  &:hover {
    color:#1a1a1a;
    background-color: #e2e7f0;
  }
`;

const GameStatsContainer = styled.div`
  align-self: stretch;
  padding-top: 15px;
  padding-bottom: 15px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  display: inline-flex;
`;

const StatsColumn = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 8px;
  display: flex;
`;

const GameStats = styled.div`
  color: rgba(226, 231, 240, 0.50);
  font-size: 18px;
  font-family: 'Inter';
  font-weight: 500;
  word-wrap: break-word;
`;

const GameDetailsButton = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 8px;
  border: 1px rgba(226, 231, 240, 0.50) solid;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  color: #e2e7f0;
  font-size: 18px;
  font-family: 'Inter';
  font-weight: 500;
  word-wrap: break-word;
  cursor:pointer;
  transition: all 0.15s;
  &:hover {
    color:#1a1a1a;
    background-color: #e2e7f0;
  }
`;

export const Profile = () => {
  return (
    <StyledProfile>
      <div style={{ width: "42vw", paddingRight: "20px", borderLeft: "1px rgba(226, 231, 240, 0.50) solid", borderRight: "1px rgba(226, 231, 240, 0.50) solid" }}>
        <ProfileContainer>
          <NameContainer>
            <Frame>
              <Logo alt="Logo" src="logo.png" />
            </Frame>
            <InfoContainer>
              <div>
                <div style={{ display: "flex", gap: "15px" }}>
                  <TextWrapper bold size="30px">
                    maky1x
                  </TextWrapper>
                  <div
                    style={{
                      border: "1px solid white",
                      fontSize: "18px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "8px",
                      height: "20px",
                      width: "20px",
                      borderRadius: "50%",
                      textAlign: "center",
                    }}
                  >
                    150
                  </div>
                </div>
                <TextWrapper size="18px">Online</TextWrapper>
              </div>
              <TextWrapper size="18px">Now playing:<br />Grand Theft Auto V</TextWrapper>
              <TextWrapper size="16px">No information specified.</TextWrapper>
            </InfoContainer>
          </NameContainer>

          <FriendContainer>
            <DivWrapper>
              <TextWrapper bold size="20px">
                Add Friend
              </TextWrapper>
            </DivWrapper>
          </FriendContainer>
        </ProfileContainer>
        <div style={{ padding: 10, gap: 10, display: 'inline-flex', width: "40vw" }}>
          <TextWrapper bold size="35px" style={{ color: '#E2E7F0', fontFamily: 'Inter', fontWeight: '600', textAlign: "left" }}>
            Top Played
          </TextWrapper>
        </div>
        <TopPlayedContainer>
          <GameContainer>
            <GameDetailsContainer>
              <GameImage src="gta.jpeg" />
              <GameInfoContainer>
                <GameTitle>Grand Theft Auto V</GameTitle>
                <GameOwnership>You own this game.</GameOwnership>
                <PlayTogetherButton>Play Together</PlayTogetherButton>
              </GameInfoContainer>
            </GameDetailsContainer>
            <GameStatsContainer>
              <StatsColumn>
                <GameStats>Played for 300h</GameStats>
                <GameStats>Last played: 9 Oct</GameStats>
              </StatsColumn>
              <GameDetailsButton>Details</GameDetailsButton>
            </GameStatsContainer>
          </GameContainer>
          <GameContainer>
            <GameDetailsContainer>
              <GameImage src="tw.jpg" />
              <GameInfoContainer>
                <GameTitle>The Witcher 3</GameTitle>
                <GameOwnership>You own this game.</GameOwnership>
                <PlayTogetherButton>Play Together</PlayTogetherButton>
              </GameInfoContainer>
            </GameDetailsContainer>
            <GameStatsContainer>
              <StatsColumn>
                <GameStats>Played for 60h</GameStats>
                <GameStats>Last played: 9 Oct</GameStats>
              </StatsColumn>
              <GameDetailsButton>Details</GameDetailsButton>
            </GameStatsContainer>
          </GameContainer>
        </TopPlayedContainer>
      </div>
    </StyledProfile>
  );
};