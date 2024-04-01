import { getRandomNumber, escapeRegExUrls } from "@/utils/utils";

describe('Utils', () => {
    // getRandomNumber
    test('Get Random Number', () => {
        const reps = 10;
        const maxNumbers = [0, 1, 10];

        for (let index = 0; index < reps; index++) {
            maxNumbers.forEach(maxNumber => {
                const randomNumber = getRandomNumber(maxNumber);

                expect(randomNumber).toBeTypeOf('number');
                expect(randomNumber).toBeGreaterThanOrEqual(0);
                expect(randomNumber).toBeLessThanOrEqual(maxNumber);
            });
        }
    });
    // excapeRegExUrls
    test('Escape Special Characters URL', () => {
        const url = 'https://example.com/path/to/(resource)/[resource]?query=string&number=123';
        const expectedUrl = 'https://example\\.com/path/to/\\(resource\\)/\\[resource\\]\\?query=string&number=123';

        const newUrl = escapeRegExUrls(url);

        expect(newUrl).toMatch(expectedUrl);
    });
});
