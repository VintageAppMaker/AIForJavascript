const puppeteer = require('puppeteer'); // v13.0.0 or later

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const timeout = 5000;
    page.setDefaultTimeout(timeout);

    {
        const targetPage = page;
        await targetPage.setViewport({
            width: 1122,
            height: 1072
        })
    }
    {
        const targetPage = page;
        const promises = [];
        promises.push(targetPage.waitForNavigation());
        await targetPage.goto('https://www.naver.com/');
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                '#widgetboard div:nth-of-type(3) div > div'
            ],
            [
                'xpath///*[@id="widgetboard"]/div[1]/div[2]/div[3]/a/div/div'
            ],
            [
                'pierce/#widgetboard div:nth-of-type(3) div > div'
            ],
            [
                'text/번역하기'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                '#widgetboard div:nth-of-type(3) div > div'
            ],
            [
                'xpath///*[@id="widgetboard"]/div[1]/div[2]/div[3]/a/div/div'
            ],
            [
                'pierce/#widgetboard div:nth-of-type(3) div > div'
            ],
            [
                'text/번역하기'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 78,
            y: 11,
          },
        });
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://papago.naver.com/?sk=ko&st=&tk=en', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await scrollIntoViewIfNeeded([
            [
                'aria/소스텍스트'
            ],
            [
                '#txtSource'
            ],
            [
                'xpath///*[@id="txtSource"]'
            ],
            [
                'pierce/#txtSource'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/소스텍스트'
            ],
            [
                '#txtSource'
            ],
            [
                'xpath///*[@id="txtSource"]'
            ],
            [
                'pierce/#txtSource'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 53,
            y: 10,
          },
        });
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://papago.naver.com/?sk=ko&st=&tk=en', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await scrollIntoViewIfNeeded([
            [
                'aria/소스텍스트'
            ],
            [
                '#txtSource'
            ],
            [
                'xpath///*[@id="txtSource"]'
            ],
            [
                'pierce/#txtSource'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/소스텍스트'
            ],
            [
                '#txtSource'
            ],
            [
                'xpath///*[@id="txtSource"]'
            ],
            [
                'pierce/#txtSource'
            ]
        ], targetPage, { timeout, visible: true });
        const inputType = await element.evaluate(el => el.type);
        if (inputType === 'select-one') {
          await changeSelectElement(element, '안')
        } else if ([
            'textarea',
            'text',
            'url',
            'tel',
            'search',
            'password',
            'number',
            'email'
        ].includes(inputType)) {
          await typeIntoElement(element, '안');
        } else {
          await changeElementValue(element, '안');
        }
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://papago.naver.com/?sk=ko&st=&tk=en', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await targetPage.keyboard.up('s');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://papago.naver.com/?sk=ko&st=&tk=en', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await scrollIntoViewIfNeeded([
            [
                'aria/소스텍스트'
            ],
            [
                '#txtSource'
            ],
            [
                'xpath///*[@id="txtSource"]'
            ],
            [
                'pierce/#txtSource'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/소스텍스트'
            ],
            [
                '#txtSource'
            ],
            [
                'xpath///*[@id="txtSource"]'
            ],
            [
                'pierce/#txtSource'
            ]
        ], targetPage, { timeout, visible: true });
        const inputType = await element.evaluate(el => el.type);
        if (inputType === 'select-one') {
          await changeSelectElement(element, '안녕')
        } else if ([
            'textarea',
            'text',
            'url',
            'tel',
            'search',
            'password',
            'number',
            'email'
        ].includes(inputType)) {
          await typeIntoElement(element, '안녕');
        } else {
          await changeElementValue(element, '안녕');
        }
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://papago.naver.com/?sk=ko&st=&tk=en', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await targetPage.keyboard.up('d');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://papago.naver.com/?sk=ko&st=&tk=en', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await scrollIntoViewIfNeeded([
            [
                'aria/소스텍스트'
            ],
            [
                '#txtSource'
            ],
            [
                'xpath///*[@id="txtSource"]'
            ],
            [
                'pierce/#txtSource'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/소스텍스트'
            ],
            [
                '#txtSource'
            ],
            [
                'xpath///*[@id="txtSource"]'
            ],
            [
                'pierce/#txtSource'
            ]
        ], targetPage, { timeout, visible: true });
        const inputType = await element.evaluate(el => el.type);
        if (inputType === 'select-one') {
          await changeSelectElement(element, '안녕하')
        } else if ([
            'textarea',
            'text',
            'url',
            'tel',
            'search',
            'password',
            'number',
            'email'
        ].includes(inputType)) {
          await typeIntoElement(element, '안녕하');
        } else {
          await changeElementValue(element, '안녕하');
        }
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://papago.naver.com/?sk=ko&st=&tk=en', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await targetPage.keyboard.up('k');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://papago.naver.com/?sk=ko&st=&tk=en', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await scrollIntoViewIfNeeded([
            [
                'aria/소스텍스트'
            ],
            [
                '#txtSource'
            ],
            [
                'xpath///*[@id="txtSource"]'
            ],
            [
                'pierce/#txtSource'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/소스텍스트'
            ],
            [
                '#txtSource'
            ],
            [
                'xpath///*[@id="txtSource"]'
            ],
            [
                'pierce/#txtSource'
            ]
        ], targetPage, { timeout, visible: true });
        const inputType = await element.evaluate(el => el.type);
        if (inputType === 'select-one') {
          await changeSelectElement(element, '안녕하세요')
        } else if ([
            'textarea',
            'text',
            'url',
            'tel',
            'search',
            'password',
            'number',
            'email'
        ].includes(inputType)) {
          await typeIntoElement(element, '안녕하세요');
        } else {
          await changeElementValue(element, '안녕하세요');
        }
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://papago.naver.com/?sk=ko&st=&tk=en', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await targetPage.keyboard.up('y');
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://papago.naver.com/?sk=ko&st=&tk=en', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await scrollIntoViewIfNeeded([
            [
                'aria/소스텍스트'
            ],
            [
                '#txtSource'
            ],
            [
                'xpath///*[@id="txtSource"]'
            ],
            [
                'pierce/#txtSource'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/소스텍스트'
            ],
            [
                '#txtSource'
            ],
            [
                'xpath///*[@id="txtSource"]'
            ],
            [
                'pierce/#txtSource'
            ]
        ], targetPage, { timeout, visible: true });
        const inputType = await element.evaluate(el => el.type);
        if (inputType === 'select-one') {
          await changeSelectElement(element, '안녕하세요\n')
        } else if ([
            'textarea',
            'text',
            'url',
            'tel',
            'search',
            'password',
            'number',
            'email'
        ].includes(inputType)) {
          await typeIntoElement(element, '안녕하세요\n');
        } else {
          await changeElementValue(element, '안녕하세요\n');
        }
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://papago.naver.com/?sk=ko&st=&tk=en', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await scrollIntoViewIfNeeded([
            [
                '#btnTranslate'
            ],
            [
                'xpath///*[@id="btnTranslate"]'
            ],
            [
                'pierce/#btnTranslate'
            ],
            [
                'text/번역하기번역'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                '#btnTranslate'
            ],
            [
                'xpath///*[@id="btnTranslate"]'
            ],
            [
                'pierce/#btnTranslate'
            ],
            [
                'text/번역하기번역'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 61,
            y: 22,
          },
        });
    }
    {
        const target = await browser.waitForTarget(t => t.url() === 'https://papago.naver.com/?sk=ko&st=&tk=en', { timeout });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await scrollIntoViewIfNeeded([
            [
                'div:nth-of-type(7) > span:nth-of-type(1) button'
            ],
            [
                'xpath///*[@id="root"]/div/div[1]/section/div/div[1]/div[2]/div/div[7]/span[1]/span/span/button'
            ],
            [
                'pierce/div:nth-of-type(7) > span:nth-of-type(1) button'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'div:nth-of-type(7) > span:nth-of-type(1) button'
            ],
            [
                'xpath///*[@id="root"]/div/div[1]/section/div/div[1]/div[2]/div/div[7]/span[1]/span/span/button'
            ],
            [
                'pierce/div:nth-of-type(7) > span:nth-of-type(1) button'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 15,
            y: 32,
          },
        });
    }

    await browser.close();

    async function waitForSelectors(selectors, frame, options) {
      for (const selector of selectors) {
        try {
          return await waitForSelector(selector, frame, options);
        } catch (err) {
          console.error(err);
        }
      }
      throw new Error('Could not find element for selectors: ' + JSON.stringify(selectors));
    }

    async function scrollIntoViewIfNeeded(selectors, frame, timeout) {
      const element = await waitForSelectors(selectors, frame, { visible: false, timeout });
      if (!element) {
        throw new Error(
          'The element could not be found.'
        );
      }
      await waitForConnected(element, timeout);
      const isInViewport = await element.isIntersectingViewport({threshold: 0});
      if (isInViewport) {
        return;
      }
      await element.evaluate(element => {
        element.scrollIntoView({
          block: 'center',
          inline: 'center',
          behavior: 'auto',
        });
      });
      await waitForInViewport(element, timeout);
    }

    async function waitForConnected(element, timeout) {
      await waitForFunction(async () => {
        return await element.getProperty('isConnected');
      }, timeout);
    }

    async function waitForInViewport(element, timeout) {
      await waitForFunction(async () => {
        return await element.isIntersectingViewport({threshold: 0});
      }, timeout);
    }

    async function waitForSelector(selector, frame, options) {
      if (!Array.isArray(selector)) {
        selector = [selector];
      }
      if (!selector.length) {
        throw new Error('Empty selector provided to waitForSelector');
      }
      let element = null;
      for (let i = 0; i < selector.length; i++) {
        const part = selector[i];
        if (element) {
          element = await element.waitForSelector(part, options);
        } else {
          element = await frame.waitForSelector(part, options);
        }
        if (!element) {
          throw new Error('Could not find element: ' + selector.join('>>'));
        }
        if (i < selector.length - 1) {
          element = (await element.evaluateHandle(el => el.shadowRoot ? el.shadowRoot : el)).asElement();
        }
      }
      if (!element) {
        throw new Error('Could not find element: ' + selector.join('|'));
      }
      return element;
    }

    async function waitForElement(step, frame, timeout) {
      const {
        count = 1,
        operator = '>=',
        visible = true,
        properties,
        attributes,
      } = step;
      const compFn = {
        '==': (a, b) => a === b,
        '>=': (a, b) => a >= b,
        '<=': (a, b) => a <= b,
      }[operator];
      await waitForFunction(async () => {
        const elements = await querySelectorsAll(step.selectors, frame);
        let result = compFn(elements.length, count);
        const elementsHandle = await frame.evaluateHandle((...elements) => {
          return elements;
        }, ...elements);
        await Promise.all(elements.map((element) => element.dispose()));
        if (result && (properties || attributes)) {
          result = await elementsHandle.evaluate(
            (elements, properties, attributes) => {
              for (const element of elements) {
                if (attributes) {
                  for (const [name, value] of Object.entries(attributes)) {
                    if (element.getAttribute(name) !== value) {
                      return false;
                    }
                  }
                }
                if (properties) {
                  if (!isDeepMatch(properties, element)) {
                    return false;
                  }
                }
              }
              return true;

              function isDeepMatch(a, b) {
                if (a === b) {
                  return true;
                }
                if ((a && !b) || (!a && b)) {
                  return false;
                }
                if (!(a instanceof Object) || !(b instanceof Object)) {
                  return false;
                }
                for (const [key, value] of Object.entries(a)) {
                  if (!isDeepMatch(value, b[key])) {
                    return false;
                  }
                }
                return true;
              }
            },
            properties,
            attributes
          );
        }
        await elementsHandle.dispose();
        return result === visible;
      }, timeout);
    }

    async function querySelectorsAll(selectors, frame) {
      for (const selector of selectors) {
        const result = await querySelectorAll(selector, frame);
        if (result.length) {
          return result;
        }
      }
      return [];
    }

    async function querySelectorAll(selector, frame) {
      if (!Array.isArray(selector)) {
        selector = [selector];
      }
      if (!selector.length) {
        throw new Error('Empty selector provided to querySelectorAll');
      }
      let elements = [];
      for (let i = 0; i < selector.length; i++) {
        const part = selector[i];
        if (i === 0) {
          elements = await frame.$$(part);
        } else {
          const tmpElements = elements;
          elements = [];
          for (const el of tmpElements) {
            elements.push(...(await el.$$(part)));
          }
        }
        if (elements.length === 0) {
          return [];
        }
        if (i < selector.length - 1) {
          const tmpElements = [];
          for (const el of elements) {
            const newEl = (await el.evaluateHandle(el => el.shadowRoot ? el.shadowRoot : el)).asElement();
            if (newEl) {
              tmpElements.push(newEl);
            }
          }
          elements = tmpElements;
        }
      }
      return elements;
    }

    async function waitForFunction(fn, timeout) {
      let isActive = true;
      const timeoutId = setTimeout(() => {
        isActive = false;
      }, timeout);
      while (isActive) {
        const result = await fn();
        if (result) {
          clearTimeout(timeoutId);
          return;
        }
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      throw new Error('Timed out');
    }

    async function changeSelectElement(element, value) {
      await element.select(value);
      await element.evaluateHandle((e) => {
        e.blur();
        e.focus();
      });
    }

    async function changeElementValue(element, value) {
      await element.focus();
      await element.evaluate((input, value) => {
        input.value = value;
        input.dispatchEvent(new Event('input', { bubbles: true }));
        input.dispatchEvent(new Event('change', { bubbles: true }));
      }, value);
    }

    async function typeIntoElement(element, value) {
      const textToType = await element.evaluate((input, newValue) => {
        if (
          newValue.length <= input.value.length ||
          !newValue.startsWith(input.value)
        ) {
          input.value = '';
          return newValue;
        }
        const originalValue = input.value;
        input.value = '';
        input.value = originalValue;
        return newValue.substring(originalValue.length);
      }, value);
      await element.type(textToType);
    }
})().catch(err => {
    console.error(err);
    process.exit(1);
});
