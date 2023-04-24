import { Text } from '@chakra-ui/react';
import Link from 'next/link';

interface IMyText {
  title: string;
  as: string;
  color?: string;
  href?: string;
  fontWeight?: number;
  hoverColor?: string;
  fontSize?: { base: string; md: string };
  [key: string]: any;
}

const MyText = ({
  title,
  as,
  color = 'brand.semiblack',
  href = '#',
  fontWeight,
  hoverColor,
  fontSize = { base: '13px', md: '13px' },
  ...rest
}: IMyText) => {


  return (
    <>
      {as === 'p' && (
        <Text color={color} as={'p'} fontSize={{ base: '14px', md: '15px' }}
        {...rest}>
          {title}
        </Text>
      )}

      {as === 'st' && (
        <Text color={color} as={'span'} fontSize={{ base: '12px', md: '12px' }}
        {...rest}>
          {title}
        </Text>
      )}

      {as === 'heading' && (
        <Text
          color={color}
          as={'span'}
          fontFamily={'heading'}
          fontWeight={600}
          fontSize={{ base: '18px', md: '20px' }}
          {...rest}
        >
          {title}
        </Text>
      )}
      {as === 'title' && (
        <Text
          color={color}
          as={'span'}
          fontFamily={'heading'}
          fontWeight={600}
          fontSize={{ base: '14px', md: '14px' }}
          {...rest}
        >
          {title}
        </Text>
      )}

      {as === 'link' && (
        <Link href={href}>
          <Text
            color={color}
            as={'span'}
            fontSize={{ base: '12px', md: '14px' }}
            fontWeight={fontWeight}
            _hover={{ opacity: !hoverColor && 0.85, color: hoverColor }}
            {...rest}
          >
            {title}
          </Text>
        </Link>
      )}

      {as === 'span' && (
        <Text
          color={color}
          display={'block'}
          as={'span'}
          fontSize={fontSize}
          fontWeight={fontWeight}
          {...rest}
        >
          {title}
        </Text>
      )}
    </>
  );
};

export default MyText;
