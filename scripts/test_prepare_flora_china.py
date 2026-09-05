import importlib.util
from pathlib import Path
import unittest

spec = importlib.util.spec_from_file_location('flora_china', Path(__file__).with_name('prepare-flora-china-descriptions.py'))
flora_china = importlib.util.module_from_spec(spec)
spec.loader.exec_module(flora_china)


class SourceTextTests(unittest.TestCase):
    def test_subscripts_preserve_photosynthetic_notation(self):
        self.assertEqual(flora_china.plain('C<sub>3</sub> and C<sub>4</sub>'), 'C₃ and C₄')

    def test_paragraphs_breaks_and_entities(self):
        self.assertEqual(flora_china.plain('<p>Leaves &amp; stems.</p><p>Flowers<br>white.</p>'), 'Leaves & stems.\n\nFlowers\nwhite.')

    def test_unclosed_anchor_does_not_swallow_chromosome_count(self):
        self.assertEqual(flora_china.plain('Leaves. <a name="count">2n = 24.'), 'Leaves. 2n = 24.')

    def test_tracking_image_is_not_rendered_or_fetched(self):
        self.assertEqual(flora_china.plain('Before<img src="pixel.gif" width="1" height="1"> after.'), 'Before after.')

    def test_changed_archive_fails_closed(self):
        with self.assertRaisesRegex(ValueError, 'archive fingerprint'):
            flora_china.prepare(b'not the archive', b'{}')


if __name__ == '__main__':
    unittest.main()
