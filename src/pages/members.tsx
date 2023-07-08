import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import MemberCard from '@/components/MemberCard';
import { h4_ } from '@/constants';

interface MemberProps {
    titleColor: string;
}

const membersData = [
    {
        id: 1,
        name: 'John Doe',
        profileImage: 'johnDoe.jpg',
        role: 'Designer',
    },
    {
        id: 2,
        name: 'Jane Smith',
        profileImage: 'janeSmith.jpg',
        role: 'Developer',
    },
    {
        id: 3,
        name: 'John Doe',
        profileImage: 'johnDoe.jpg',
        role: 'Designer',
    },
    {
        id: 4,
        name: 'Jane Smith',
        profileImage: 'janeSmith.jpg',
        role: 'Developer',
    },
];

export default function Members({ titleColor }: MemberProps) {
    const theme = useTheme();
    const breakPoint = useMediaQuery('(min-width:600px)');
    const breakPoint2 = useMediaQuery('(min-width:750px)');

    return (
        <Box width="85%" marginX="auto">
            <Typography variant="h2" fontSize={h4_} mb="35px">
                Members
            </Typography>
            <Box
                display="grid"
                gap="35px"
                gridTemplateColumns={
                    breakPoint2 ? '30% 30% 30%' : breakPoint ? '45% 45%' : '80%'
                }
                justifyContent={breakPoint ? 'space-between' : 'center'}
            >
                <MemberCard
                    color={titleColor}
                    memberName="Viswa"
                    memberRole="thalaivar"
                    memberThumbnail="flight1.jpg"
                    memberDescription="lorem ipsum"
                />

                <MemberCard
                    color={titleColor}
                    memberName="Viswa"
                    memberRole="thalaivar"
                    memberThumbnail="flight1.jpg"
                    memberDescription="lorem ipsum"
                />

                <MemberCard
                    color={titleColor}
                    memberName="Viswa"
                    memberRole="thalaivar"
                    memberThumbnail="flight1.jpg"
                    memberDescription="lorem ipsum"
                />

                <MemberCard
                    color={titleColor}
                    memberName="Viswa"
                    memberRole="thalaivar"
                    memberThumbnail="flight1.jpg"
                    memberDescription="lorem ipsum"
                />

                <MemberCard
                    color={titleColor}
                    memberName="Viswa"
                    memberRole="thalaivar"
                    memberThumbnail="flight1.jpg"
                    memberDescription="lorem ipsum"
                />

                <MemberCard
                    color={titleColor}
                    memberName="Viswa"
                    memberRole="thalaivar"
                    memberThumbnail="flight1.jpg"
                    memberDescription="lorem ipsum"
                />
            </Box>
        </Box>
    );
}

// <Box
//     sx={{
//         '& .MuiStack-root': {
//             backgroundColor: 'transparent',
//             padding: '0px',
//         },
//     }}
// >
//     <Box>
//         <Typography
//             height="40vh"
//             variant="h1"
//             bgcolor="black"
//             display="flex"
//             justifyContent="center"
//             alignItems="center"
//             textAlign="center"
//             color={theme.palette.secondary.main}
//         >
//             Members
//         </Typography>
//     </Box>

//     <Stack
//         direction={'column'}
//         divider={<Divider orientation="horizontal" flexItem></Divider>}
//         bgcolor="#F0E4DC"
//         sx={{
//             '& .MuiStack-root': {
//                 backgroundColor: 'transparent',
//                 padding: '0px',
//             },
//         }}
//     >
//         {membersData.map((member, index) => (
//             <MemberCard
//                 key={index}
//                 name={member.name}
//                 role={member.role}
//                 image={member.profileImage}
//             ></MemberCard>
//         ))}
//     </Stack>
// </Box>
