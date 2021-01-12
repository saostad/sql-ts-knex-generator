### Changelog

All notable changes to this project will be documented in this file. Dates are displayed in UTC.

#### [1.4.0-beta.0](https://github.com/saostad/sql-ts-knex-generator/compare/1.3.0...1.4.0-beta.0)

> 17 November 2019

- List PostgreSQL materialised views. [`f5efa4b`](https://github.com/saostad/sql-ts-knex-generator/commit/f5efa4b5d55c5b1a4d13be0a4be13ba758b919b3)
- Sort type definitions returned by `DatabaseTasks.stringifyDatabase` to increase compat with source control. [`b628d6a`](https://github.com/saostad/sql-ts-knex-generator/commit/b628d6a109089b451317b412c16dbcf40f26aef7)

#### [1.3.0](https://github.com/saostad/sql-ts-knex-generator/compare/1.2.0...1.3.0)

> 2 October 2019

- Configuration option for column name casing. [`ff30297`](https://github.com/saostad/sql-ts-knex-generator/commit/ff3029799c212aa9834df26c2f980a8922825d68)
- Changed how table case option works to be more flexible. [`ef6d514`](https://github.com/saostad/sql-ts-knex-generator/commit/ef6d514d5f0caef7ffb07e152bea30b045366b14)

#### [1.2.0](https://github.com/saostad/sql-ts-knex-generator/compare/1.1.2...1.2.0)

> 21 September 2019

- Re-implemented including tables. [`3799510`](https://github.com/saostad/sql-ts-knex-generator/commit/37995107e35decefbdfb0453e12c24adddbdcefe)
- Split pascal and singular naming configurations. [`ca3d242`](https://github.com/saostad/sql-ts-knex-generator/commit/ca3d242a92e60507f4f67e1b7bb5b461111dcf73)
- Added tests to TableSubTasks. [`5953bae`](https://github.com/saostad/sql-ts-knex-generator/commit/5953baef6ffd5c074aaaa859589071475f5414ef)

#### [1.1.2](https://github.com/saostad/sql-ts-knex-generator/compare/1.1.1...1.1.2)

> 23 March 2019

- Remove lodash. [`2bb0f4f`](https://github.com/saostad/sql-ts-knex-generator/commit/2bb0f4f183ae4d865a848308ad2a869c74fd032e)
- Update README with better installation and usage instructions. [`57f70ee`](https://github.com/saostad/sql-ts-knex-generator/commit/57f70ee984a739fc2fc80d69efc2f4dcb89dfdf3)
- Use either dialect or client from config to determine sql adapter. [`738ec1e`](https://github.com/saostad/sql-ts-knex-generator/commit/738ec1efb8dde7e4966bd0578a3d9ec74957eae1)

#### [1.1.1](https://github.com/saostad/sql-ts-knex-generator/compare/1.1.0...1.1.1)

> 3 March 2019

- Fix #16 - Incorrect optionality. [`#16`](https://github.com/saostad/sql-ts-knex-generator/issues/16)
- Update README.md [`#15`](https://github.com/saostad/sql-ts-knex-generator/issues/15)

#### [1.1.0](https://github.com/saostad/sql-ts-knex-generator/compare/1.0.0...1.1.0)

> 8 September 2018

- Update dependencies. [`e89bae8`](https://github.com/saostad/sql-ts-knex-generator/commit/e89bae8f9275bc9a1e5f02effb51397ce8b4fd54)
- Allow manipulation of the database object before sending to handlebars  [`57a7de4`](https://github.com/saostad/sql-ts-knex-generator/commit/57a7de426f714dc2fd68c0aa5670b7b678b8a8e6)
- Update Typings and comments. [`3acc50a`](https://github.com/saostad/sql-ts-knex-generator/commit/3acc50a2e4d0731d7cd51f60817f9e19e87fedf8)

### [1.0.0](https://github.com/saostad/sql-ts-knex-generator/compare/0.5.0...1.0.0)

> 5 August 2018

- Implement handlebars templating. [`68c876e`](https://github.com/saostad/sql-ts-knex-generator/commit/68c876eecb7dbdf78e1779880dbd11a0b3190ce8)
- Remove spaces from property names. [`d512c7d`](https://github.com/saostad/sql-ts-knex-generator/commit/d512c7d273f512d39f35d0f7fdfe29120a88d98c)
- Fix README linking. [`b92d179`](https://github.com/saostad/sql-ts-knex-generator/commit/b92d179a965a1fbd5ae12a1bcca7120a45f137bd)

#### [0.5.0](https://github.com/saostad/sql-ts-knex-generator/compare/0.4.0...0.5.0)

> 28 July 2018

- Allow for additional customization of table definitions [`#12`](https://github.com/saostad/sql-ts-knex-generator/pull/12)
- Fix tests and add new tests [`14a6dd9`](https://github.com/saostad/sql-ts-knex-generator/commit/14a6dd917b883bc538b3e73b7bec1f2dd5b2ff09)
- Allow definitions to be extended [`8d6da3d`](https://github.com/saostad/sql-ts-knex-generator/commit/8d6da3debf0cdae967ec4c04c8e64a28ac7d7a76)
- Cleaned up README. [`e9c70e0`](https://github.com/saostad/sql-ts-knex-generator/commit/e9c70e002d4d37a0064e6418e8f1a5b4ea72337d)

#### [0.4.0](https://github.com/saostad/sql-ts-knex-generator/compare/0.3.3...0.4.0)

> 12 May 2018

- Updated dependencies. [`826640f`](https://github.com/saostad/sql-ts-knex-generator/commit/826640f30fe0c3b8a8f469102d78b1c284b69bd2)
- Added configuration for property optionality. [`ef21114`](https://github.com/saostad/sql-ts-knex-generator/commit/ef21114c975fa06ccd6935be341a8d774c6e9ec3)

#### [0.3.3](https://github.com/saostad/sql-ts-knex-generator/compare/0.3.2...0.3.3)

> 7 February 2018

- Included Column and Table in index export. [`#11`](https://github.com/saostad/sql-ts-knex-generator/pull/11)
- Fixed fromObject examples in README. [`#10`](https://github.com/saostad/sql-ts-knex-generator/pull/10)
- Additional mssql types. [`e788a0e`](https://github.com/saostad/sql-ts-knex-generator/commit/e788a0e24202900e2c534acebef827becc2364c1)
- Spelling mistakes in README. [`af35848`](https://github.com/saostad/sql-ts-knex-generator/commit/af3584818ef5d930b7efeb9fd266a7e9b549fc1a)
- Fixed README layout. [`293a5a2`](https://github.com/saostad/sql-ts-knex-generator/commit/293a5a2b87d740d24a22675768d5c41a705c621e)

#### [0.3.2](https://github.com/saostad/sql-ts-knex-generator/compare/0.3.1...0.3.2)

> 13 January 2018

- Additional config option for user defined type map. [`0f49ff5`](https://github.com/saostad/sql-ts-knex-generator/commit/0f49ff5337a24261a145e91f0118ed9a49609bba)
- Added additional TypeScript definitions. [`b019f3c`](https://github.com/saostad/sql-ts-knex-generator/commit/b019f3cd76174c883c5d9c47ca2a94b816e29872)

#### [0.3.1](https://github.com/saostad/sql-ts-knex-generator/compare/0.3.0...0.3.1)

> 15 October 2017

- Upgrade dependencies. [`1ce5429`](https://github.com/saostad/sql-ts-knex-generator/commit/1ce5429c5af55443a3b5768f511b66fdfcc14c59)
- Lowercased imports for tests to work. [`c7bfaba`](https://github.com/saostad/sql-ts-knex-generator/commit/c7bfabab640f1bb0c92df6f386878a51fe7ae597)

#### [0.3.0](https://github.com/saostad/sql-ts-knex-generator/compare/0.2.4...0.3.0)

> 15 October 2017

- Internal rewrite. [`7284810`](https://github.com/saostad/sql-ts-knex-generator/commit/7284810ce7544a973548d1a886ac5f7ca2502333)
- Type overriding takes schemas into account. [`24f617c`](https://github.com/saostad/sql-ts-knex-generator/commit/24f617ca9d21f3032e06c91379e2454064522e8c)
- Split table tasks into sub tasks for better test coverage. [`60745f8`](https://github.com/saostad/sql-ts-knex-generator/commit/60745f84bc7a75fe39c3e847fc020ad37d3a8b07)

#### [0.2.4](https://github.com/saostad/sql-ts-knex-generator/compare/0.2.3...0.2.4)

> 23 August 2017

- Add information about `msnodesqlv8` [`#7`](https://github.com/saostad/sql-ts-knex-generator/pull/7)
- add information about `msnodesqlv8` [`8ebbd3b`](https://github.com/saostad/sql-ts-knex-generator/commit/8ebbd3b0dd2898a59d4afc50da55a1860bad04e4)
- Capitalised mssql query. [`452f438`](https://github.com/saostad/sql-ts-knex-generator/commit/452f438f118433d7f13416d406fdcf3e00baba52)
- Added bespoke information section. [`a3d378a`](https://github.com/saostad/sql-ts-knex-generator/commit/a3d378a131778eb5a0be6ba5ed02d9a6f10216b0)

#### [0.2.3](https://github.com/saostad/sql-ts-knex-generator/compare/0.2.2...0.2.3)

> 23 July 2017

- Add TS declaration output and package.json types file. [`0e653dd`](https://github.com/saostad/sql-ts-knex-generator/commit/0e653dde4db737b39932e8a7a1e3de965a632c4e)

#### [0.2.2](https://github.com/saostad/sql-ts-knex-generator/compare/0.2.1...0.2.2)

> 23 July 2017

#### [0.2.1](https://github.com/saostad/sql-ts-knex-generator/compare/0.2.0...0.2.1)

> 23 July 2017

- Fixes #4 - All postgres columns are being output as optional [`#4`](https://github.com/saostad/sql-ts-knex-generator/issues/4)
- Added note in generated file about regeneration. [`68dca54`](https://github.com/saostad/sql-ts-knex-generator/commit/68dca54a7e77a9f65075c496ddb1605555299c78)
- Simplified SQL Server is nullable check. [`225c5a9`](https://github.com/saostad/sql-ts-knex-generator/commit/225c5a9f1404caf497a32eeb59a5aee436d74897)
- Fixed test covering fallback. [`1ba32d1`](https://github.com/saostad/sql-ts-knex-generator/commit/1ba32d1e693b605781d1b7c6b82bc6d9e56190e5)

#### [0.2.0](https://github.com/saostad/sql-ts-knex-generator/compare/v0.2.0-beta02...0.2.0)

> 23 July 2017

- Initial commit. [`b44a27e`](https://github.com/saostad/sql-ts-knex-generator/commit/b44a27ea26a055c5bd9db02c811d3d490f309999)
- Modified packages. [`c4cace4`](https://github.com/saostad/sql-ts-knex-generator/commit/c4cace458988c9e94550842552354a3771ea6be8)
- Added tests for refactored system. [`d39e2f5`](https://github.com/saostad/sql-ts-knex-generator/commit/d39e2f58e09fb3b08e1db230b71d50af66ec8849)

#### [v0.2.0-beta02](https://github.com/saostad/sql-ts-knex-generator/compare/v0.2.0-beta01...v0.2.0-beta02)

> 12 January 2021

- doc: change log [`6eb0a84`](https://github.com/saostad/sql-ts-knex-generator/commit/6eb0a844aaddce39ef32e20eb911c89b3278f9e2)
- fix: added drivers as required packages [`0820c15`](https://github.com/saostad/sql-ts-knex-generator/commit/0820c1565645e932a3c9ef679a7ed0349091ca20)

#### [v0.2.0-beta01](https://github.com/saostad/sql-ts-knex-generator/compare/0.1.2...v0.2.0-beta01)

> 12 January 2021

- passed the first tests [`d32e0e6`](https://github.com/saostad/sql-ts-knex-generator/commit/d32e0e699aed61f33a22a197eab78d891e83fe9d)
- removed extra files [`bf35f19`](https://github.com/saostad/sql-ts-knex-generator/commit/bf35f19338f058505dd4616e3b7e6f85ed704ac7)
- refactor: the project files [`e627a19`](https://github.com/saostad/sql-ts-knex-generator/commit/e627a19296cd380f42b744d87c4ab227ecf7d3fb)

#### [0.1.2](https://github.com/saostad/sql-ts-knex-generator/compare/0.1.1...0.1.2)

> 19 July 2017

- Moved the global types into a file. [`088458f`](https://github.com/saostad/sql-ts-knex-generator/commit/088458f74f6ae09b4140193753c27bcbe230a391)
- Postgres no longer filters on public schema [`4549a82`](https://github.com/saostad/sql-ts-knex-generator/commit/4549a82f0e36fd4be1a31fea73aad7ecec01967a)

#### [0.1.1](https://github.com/saostad/sql-ts-knex-generator/compare/0.1.0...0.1.1)

> 17 July 2017

- Added exception handler to cli. [`50b43e6`](https://github.com/saostad/sql-ts-knex-generator/commit/50b43e69e39f0e0a1a33d5923b8e4827c6f22b0c)

#### [0.1.0](https://github.com/saostad/sql-ts-knex-generator/compare/0.0.4...0.1.0)

> 16 July 2017

- Return the database definition as a plain JS object. [`75175dd`](https://github.com/saostad/sql-ts-knex-generator/commit/75175ddf0130342c56945b13a86b50125554478b)
- Updated README with new config options. [`de64b15`](https://github.com/saostad/sql-ts-knex-generator/commit/de64b15d80a0fc223a5d76d68e62d50f5ceee00f)
- Config option to specify the interface name format. [`3517241`](https://github.com/saostad/sql-ts-knex-generator/commit/3517241ebafeb5c03997cee992ce3a5495bf3b4d)

#### [0.0.4](https://github.com/saostad/sql-ts-knex-generator/compare/0.0.3...0.0.4)

> 14 May 2017

- Added npm scope to README. [`3ce795e`](https://github.com/saostad/sql-ts-knex-generator/commit/3ce795ef91aeff9d260a003dace909e87b25ea18)
- Improved configuration section of README. [`b7d5acc`](https://github.com/saostad/sql-ts-knex-generator/commit/b7d5accc9c5ca8138de9fcf8638a3665372e6763)
- Travis badge. [`eddb90c`](https://github.com/saostad/sql-ts-knex-generator/commit/eddb90ca71a8a94e3ff4cbb45ab211e112212829)

#### [0.0.3](https://github.com/saostad/sql-ts-knex-generator/compare/0.0.2...0.0.3)

> 14 May 2017

- Fixed bug where definitions for tables that do not exist were being generated. [`a14cc68`](https://github.com/saostad/sql-ts-knex-generator/commit/a14cc68d5fe63b2a1d5b40423642483368db3214)
- Added specs for DatabaseFactory. [`b6cfc0a`](https://github.com/saostad/sql-ts-knex-generator/commit/b6cfc0aa5182a5eb94847cf223cd279108907034)
- Use pretest instead of joining tasks. [`635cb3a`](https://github.com/saostad/sql-ts-knex-generator/commit/635cb3a30e60498895137bc9a11b21396d2c763e)

#### [0.0.2](https://github.com/saostad/sql-ts-knex-generator/compare/0.0.1...0.0.2)

> 14 May 2017

- Added bin link to package file. [`270023b`](https://github.com/saostad/sql-ts-knex-generator/commit/270023b39f17e962897f4efc8d49f2a23b098ff9)

#### 0.0.1

> 14 May 2017

- Initial commit. [`b44a27e`](https://github.com/saostad/sql-ts-knex-generator/commit/b44a27ea26a055c5bd9db02c811d3d490f309999)
- Modified packages. [`c4cace4`](https://github.com/saostad/sql-ts-knex-generator/commit/c4cace458988c9e94550842552354a3771ea6be8)
- Added README. [`dc4164f`](https://github.com/saostad/sql-ts-knex-generator/commit/dc4164fa88c796a6092e160711a05abbfe434871)
