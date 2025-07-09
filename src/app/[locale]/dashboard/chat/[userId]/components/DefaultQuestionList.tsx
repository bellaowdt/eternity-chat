import {
  DEFAULT_MAX_WIDTH_958,
  DefaultQuestionsList,
} from '@/constants/general';
import { Box, Button, Typography } from '@mui/material';
import { useLocale, useTranslations } from 'next-intl';
import { FC, Fragment } from 'react';

type DefaultQuestionListProps = {
  onHandleSelectQuestion: (id: number) => void;
};

const DefaultQuestionList: FC<DefaultQuestionListProps> = ({
  onHandleSelectQuestion,
}) => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <Box
      maxWidth={DEFAULT_MAX_WIDTH_958}
      display="flex"
      flexWrap="wrap"
      gap={1}
      sx={{ mt: 3 }}
    >
      {DefaultQuestionsList.map((question) => (
        <Fragment key={question.value as string}>
          <Button
            variant="contained"
            onClick={() => onHandleSelectQuestion(+question.id)}
            sx={{
              textTransform: 'none',
              borderRadius: 1.5,
              bgcolor: 'grey.200',
              border: 'none',
              boxShadow: 'none',
            }}
          >
            <Typography
              variant="body1"
              color="text.primary"
              className={`latoStyleRegular-${locale}`}
              px={1}
              py={0.5}
            >
              {question.label}
            </Typography>
          </Button>
        </Fragment>
      ))}
    </Box>
  );
};

export default DefaultQuestionList;
